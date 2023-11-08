import type { MutationResolvers } from './../../../types.generated';
import transporter from '@/lib/transporter';
import process from 'process';
import jwt from 'jsonwebtoken';

export const sendEmail: NonNullable<MutationResolvers['sendEmail']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  if (!_ctx.jwt?.id) {
    return false;
  }

  const account = await _ctx.service.Account.findOne({
    accountFilter: {
      id: _ctx.jwt?.id,
    },
  });

  if (!account?.account) {
    return false;
  }

  const signingKey = process.env.JWT_SECRET;
  const host = process.env.DOMAIN;
  const siteUrl = process.env.WEB_APP_URL;

  const token = jwt.sign(account.account, signingKey, {
    subject: 'magic-link',
    expiresIn: '1h',
    issuer: host,
    algorithm: 'HS256',
  });

  const url = `${siteUrl}/activate/${token}`;

  const sendRes = await transporter.sendMail({
    from: 'Experts-Blooms <no-reply@example.com>',
    to: account.account.email,
    subject: `Sign in to ${process.env.DOMAIN ?? '-'}`,
    text: text({
      url,
      host,
    }),
    html: html({
      url,
      host,
    }),
  });

  console.log('send sms res -->  : ', sendRes);

  return sendRes.accepted.length > 0;
};

function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

function html(params: { url: string; host: string; theme?: any }) {
  const { url, host, theme = {} } = params;

  const escapedHost = host.replace(/\./g, '&#8203;.');

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const brandColor = theme?.brandColor || '#346df1';
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const buttonText = theme?.buttonText || '#fff';

  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff',
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText,
  };

  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`;
}
