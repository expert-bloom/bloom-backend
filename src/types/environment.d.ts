declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      NEXT_PUBLIC_S3_CLOUD_FRONT_URL: string;
      SECRET: string;
      WEB_APP_URL: string;
      DOMAIN: string;
      JWT_SECRET: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;
      EMAIL_PASSWORD: string;
      EMAIL_USER: string;
    }
  }
}

export {};
