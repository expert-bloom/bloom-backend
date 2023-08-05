import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":12,"end":17}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"me","loc":{"start":22,"end":24}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":26,"end":32}},"loc":{"start":26,"end":32}},"directives":[],"loc":{"start":22,"end":32}}],"loc":{"start":0,"end":34}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"AccountRoles","loc":{"start":41,"end":53}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"COMPANY","loc":{"start":58,"end":65}},"directives":[],"loc":{"start":58,"end":65}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"APPLICANT","loc":{"start":68,"end":77}},"directives":[],"loc":{"start":68,"end":77}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"PUBLIC","loc":{"start":80,"end":86}},"directives":[],"loc":{"start":80,"end":86}}],"loc":{"start":36,"end":88}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"Gender","loc":{"start":95,"end":101}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"MALE","loc":{"start":106,"end":110}},"directives":[],"loc":{"start":106,"end":110}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"FEMALE","loc":{"start":113,"end":119}},"directives":[],"loc":{"start":113,"end":119}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"OTHER","loc":{"start":122,"end":127}},"directives":[],"loc":{"start":122,"end":127}}],"loc":{"start":90,"end":129}},{"kind":"InterfaceTypeDefinition","name":{"kind":"Name","value":"IAccount","loc":{"start":141,"end":149}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":154,"end":156}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":158,"end":160}},"loc":{"start":158,"end":160}},"loc":{"start":158,"end":161}},"directives":[],"loc":{"start":154,"end":161}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":164,"end":169}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":171,"end":177}},"loc":{"start":171,"end":177}},"loc":{"start":171,"end":178}},"directives":[],"loc":{"start":164,"end":178}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName","loc":{"start":181,"end":190}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":192,"end":198}},"loc":{"start":192,"end":198}},"loc":{"start":192,"end":199}},"directives":[],"loc":{"start":181,"end":199}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName","loc":{"start":202,"end":210}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":212,"end":218}},"loc":{"start":212,"end":218}},"loc":{"start":212,"end":219}},"directives":[],"loc":{"start":202,"end":219}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone","loc":{"start":222,"end":227}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":229,"end":235}},"loc":{"start":229,"end":235}},"loc":{"start":229,"end":236}},"directives":[],"loc":{"start":222,"end":236}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"accountType","loc":{"start":239,"end":250}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountRoles","loc":{"start":252,"end":264}},"loc":{"start":252,"end":264}},"loc":{"start":252,"end":265}},"directives":[],"loc":{"start":239,"end":265}}],"loc":{"start":131,"end":267}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Account","loc":{"start":274,"end":281}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"IAccount","loc":{"start":293,"end":301}},"loc":{"start":293,"end":301}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":306,"end":308}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":310,"end":312}},"loc":{"start":310,"end":312}},"loc":{"start":310,"end":313}},"directives":[],"loc":{"start":306,"end":313}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":316,"end":321}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":323,"end":329}},"loc":{"start":323,"end":329}},"loc":{"start":323,"end":330}},"directives":[],"loc":{"start":316,"end":330}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName","loc":{"start":333,"end":342}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":344,"end":350}},"loc":{"start":344,"end":350}},"loc":{"start":344,"end":351}},"directives":[],"loc":{"start":333,"end":351}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName","loc":{"start":354,"end":362}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":364,"end":370}},"loc":{"start":364,"end":370}},"loc":{"start":364,"end":371}},"directives":[],"loc":{"start":354,"end":371}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone","loc":{"start":374,"end":379}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":381,"end":387}},"loc":{"start":381,"end":387}},"loc":{"start":381,"end":388}},"directives":[],"loc":{"start":374,"end":388}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"accountType","loc":{"start":391,"end":402}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountRoles","loc":{"start":404,"end":416}},"loc":{"start":404,"end":416}},"loc":{"start":404,"end":417}},"directives":[],"loc":{"start":391,"end":417}}],"loc":{"start":269,"end":419}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Freelancer","loc":{"start":426,"end":436}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":441,"end":443}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":445,"end":451}},"loc":{"start":445,"end":451}},"loc":{"start":445,"end":452}},"directives":[],"loc":{"start":441,"end":452}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"experienceYear","loc":{"start":455,"end":469}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":471,"end":474}},"loc":{"start":471,"end":474}},"loc":{"start":471,"end":475}},"directives":[],"loc":{"start":455,"end":475}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"resume","loc":{"start":478,"end":484}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":486,"end":492}},"loc":{"start":486,"end":492}},"directives":[],"loc":{"start":478,"end":492}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"gender","loc":{"start":495,"end":501}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":503,"end":509}},"loc":{"start":503,"end":509}},"loc":{"start":503,"end":510}},"directives":[],"loc":{"start":495,"end":510}}],"loc":{"start":421,"end":512}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime","loc":{"start":521,"end":529}},"directives":[],"loc":{"start":514,"end":529}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":542,"end":550}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"signUpCompany","loc":{"start":555,"end":568}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":569,"end":574}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpCompanyInput","loc":{"start":576,"end":594}},"loc":{"start":576,"end":594}},"loc":{"start":576,"end":595}},"directives":[],"loc":{"start":569,"end":595}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload","loc":{"start":598,"end":609}},"loc":{"start":598,"end":609}},"loc":{"start":598,"end":610}},"directives":[],"loc":{"start":555,"end":610}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"signUpFreelancer","loc":{"start":613,"end":629}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":630,"end":635}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpFreelancerInput","loc":{"start":637,"end":658}},"loc":{"start":637,"end":658}},"loc":{"start":637,"end":659}},"directives":[],"loc":{"start":630,"end":659}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload","loc":{"start":662,"end":673}},"loc":{"start":662,"end":673}},"loc":{"start":662,"end":674}},"directives":[],"loc":{"start":613,"end":674}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"logIn","loc":{"start":677,"end":682}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":683,"end":688}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput","loc":{"start":690,"end":700}},"loc":{"start":690,"end":700}},"loc":{"start":690,"end":701}},"directives":[],"loc":{"start":683,"end":701}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload","loc":{"start":704,"end":715}},"loc":{"start":704,"end":715}},"loc":{"start":704,"end":716}},"directives":[],"loc":{"start":677,"end":716}}],"loc":{"start":530,"end":718}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"AuthPayload","loc":{"start":725,"end":736}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"PayloadError","loc":{"start":748,"end":760}},"loc":{"start":748,"end":760}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"errors","loc":{"start":765,"end":771}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Error","loc":{"start":774,"end":779}},"loc":{"start":774,"end":779}},"loc":{"start":774,"end":780}},"loc":{"start":773,"end":781}},"loc":{"start":773,"end":782}},"directives":[],"loc":{"start":765,"end":782}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"account","loc":{"start":785,"end":792}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthAccountPayload","loc":{"start":794,"end":812}},"loc":{"start":794,"end":812}},"directives":[],"loc":{"start":785,"end":812}}],"loc":{"start":720,"end":814}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"AuthAccountPayload","loc":{"start":821,"end":839}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"IAccount","loc":{"start":851,"end":859}},"loc":{"start":851,"end":859}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":864,"end":866}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":868,"end":870}},"loc":{"start":868,"end":870}},"loc":{"start":868,"end":871}},"directives":[],"loc":{"start":864,"end":871}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":874,"end":879}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":881,"end":887}},"loc":{"start":881,"end":887}},"loc":{"start":881,"end":888}},"directives":[],"loc":{"start":874,"end":888}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName","loc":{"start":891,"end":900}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":902,"end":908}},"loc":{"start":902,"end":908}},"loc":{"start":902,"end":909}},"directives":[],"loc":{"start":891,"end":909}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName","loc":{"start":912,"end":920}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":922,"end":928}},"loc":{"start":922,"end":928}},"loc":{"start":922,"end":929}},"directives":[],"loc":{"start":912,"end":929}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone","loc":{"start":932,"end":937}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":939,"end":945}},"loc":{"start":939,"end":945}},"loc":{"start":939,"end":946}},"directives":[],"loc":{"start":932,"end":946}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"accountType","loc":{"start":949,"end":960}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountRoles","loc":{"start":962,"end":974}},"loc":{"start":962,"end":974}},"loc":{"start":962,"end":975}},"directives":[],"loc":{"start":949,"end":975}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"company","loc":{"start":978,"end":985}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Company","loc":{"start":987,"end":994}},"loc":{"start":987,"end":994}},"directives":[],"loc":{"start":978,"end":994}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":997,"end":1001}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Freelancer","loc":{"start":1003,"end":1013}},"loc":{"start":1003,"end":1013}},"directives":[],"loc":{"start":997,"end":1013}}],"loc":{"start":816,"end":1015}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"LoginInput","loc":{"start":1023,"end":1033}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email","loc":{"start":1038,"end":1043}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1045,"end":1051}},"loc":{"start":1045,"end":1051}},"loc":{"start":1045,"end":1052}},"directives":[],"loc":{"start":1038,"end":1052}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password","loc":{"start":1055,"end":1063}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1065,"end":1071}},"loc":{"start":1065,"end":1071}},"loc":{"start":1065,"end":1072}},"directives":[],"loc":{"start":1055,"end":1072}}],"loc":{"start":1017,"end":1074}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"SignUpCompanyInput","loc":{"start":1082,"end":1100}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email","loc":{"start":1105,"end":1110}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1112,"end":1118}},"loc":{"start":1112,"end":1118}},"loc":{"start":1112,"end":1119}},"directives":[],"loc":{"start":1105,"end":1119}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"firstName","loc":{"start":1122,"end":1131}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1133,"end":1139}},"loc":{"start":1133,"end":1139}},"loc":{"start":1133,"end":1140}},"directives":[],"loc":{"start":1122,"end":1140}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lastName","loc":{"start":1143,"end":1151}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1153,"end":1159}},"loc":{"start":1153,"end":1159}},"loc":{"start":1153,"end":1160}},"directives":[],"loc":{"start":1143,"end":1160}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"phone","loc":{"start":1163,"end":1168}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1170,"end":1176}},"loc":{"start":1170,"end":1176}},"loc":{"start":1170,"end":1177}},"directives":[],"loc":{"start":1163,"end":1177}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password","loc":{"start":1180,"end":1188}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1190,"end":1196}},"loc":{"start":1190,"end":1196}},"loc":{"start":1190,"end":1197}},"directives":[],"loc":{"start":1180,"end":1197}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"companyName","loc":{"start":1200,"end":1211}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1213,"end":1219}},"loc":{"start":1213,"end":1219}},"loc":{"start":1213,"end":1220}},"directives":[],"loc":{"start":1200,"end":1220}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"country","loc":{"start":1223,"end":1230}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1232,"end":1238}},"loc":{"start":1232,"end":1238}},"loc":{"start":1232,"end":1239}},"directives":[],"loc":{"start":1223,"end":1239}}],"loc":{"start":1076,"end":1241}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"SignUpFreelancerInput","loc":{"start":1249,"end":1270}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email","loc":{"start":1275,"end":1280}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1282,"end":1288}},"loc":{"start":1282,"end":1288}},"loc":{"start":1282,"end":1289}},"directives":[],"loc":{"start":1275,"end":1289}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"firstName","loc":{"start":1292,"end":1301}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1303,"end":1309}},"loc":{"start":1303,"end":1309}},"loc":{"start":1303,"end":1310}},"directives":[],"loc":{"start":1292,"end":1310}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lastName","loc":{"start":1313,"end":1321}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1323,"end":1329}},"loc":{"start":1323,"end":1329}},"loc":{"start":1323,"end":1330}},"directives":[],"loc":{"start":1313,"end":1330}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"gender","loc":{"start":1333,"end":1339}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Gender","loc":{"start":1341,"end":1347}},"loc":{"start":1341,"end":1347}},"loc":{"start":1341,"end":1348}},"directives":[],"loc":{"start":1333,"end":1348}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"phone","loc":{"start":1351,"end":1356}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1358,"end":1364}},"loc":{"start":1358,"end":1364}},"loc":{"start":1358,"end":1365}},"directives":[],"loc":{"start":1351,"end":1365}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password","loc":{"start":1368,"end":1376}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1378,"end":1384}},"loc":{"start":1378,"end":1384}},"loc":{"start":1378,"end":1385}},"directives":[],"loc":{"start":1368,"end":1385}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"country","loc":{"start":1388,"end":1395}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1397,"end":1403}},"loc":{"start":1397,"end":1403}},"loc":{"start":1397,"end":1404}},"directives":[],"loc":{"start":1388,"end":1404}}],"loc":{"start":1243,"end":1406}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":1412,"end":1417}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":1407,"end":1417}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":1424,"end":1432}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":1419,"end":1432}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Error","loc":{"start":1439,"end":1444}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"message","loc":{"start":1449,"end":1456}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1458,"end":1464}},"loc":{"start":1458,"end":1464}},"loc":{"start":1458,"end":1465}},"directives":[],"loc":{"start":1449,"end":1465}}],"loc":{"start":1434,"end":1467}},{"kind":"InterfaceTypeDefinition","name":{"kind":"Name","value":"PayloadError","loc":{"start":1479,"end":1491}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"errors","loc":{"start":1496,"end":1502}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Error","loc":{"start":1505,"end":1510}},"loc":{"start":1505,"end":1510}},"loc":{"start":1505,"end":1511}},"loc":{"start":1504,"end":1512}},"loc":{"start":1504,"end":1513}},"directives":[],"loc":{"start":1496,"end":1513}}],"loc":{"start":1469,"end":1515}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Company","loc":{"start":1521,"end":1528}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1533,"end":1535}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1537,"end":1543}},"loc":{"start":1537,"end":1543}},"loc":{"start":1537,"end":1544}},"directives":[],"loc":{"start":1533,"end":1544}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"companyName","loc":{"start":1547,"end":1558}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1560,"end":1566}},"loc":{"start":1560,"end":1566}},"loc":{"start":1560,"end":1567}},"directives":[],"loc":{"start":1547,"end":1567}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"logo","loc":{"start":1570,"end":1574}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1576,"end":1582}},"loc":{"start":1576,"end":1582}},"directives":[],"loc":{"start":1570,"end":1582}}],"loc":{"start":1516,"end":1584}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":1597,"end":1602}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"getJobPosts","loc":{"start":1607,"end":1618}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":1619,"end":1624}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JopPostFilterInput","loc":{"start":1626,"end":1644}},"loc":{"start":1626,"end":1644}},"loc":{"start":1626,"end":1645}},"directives":[],"loc":{"start":1619,"end":1645}}],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobPost","loc":{"start":1649,"end":1656}},"loc":{"start":1649,"end":1656}},"loc":{"start":1649,"end":1657}},"loc":{"start":1648,"end":1658}},"loc":{"start":1648,"end":1659}},"directives":[],"loc":{"start":1607,"end":1659}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"sayHi","loc":{"start":1662,"end":1667}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1669,"end":1675}},"loc":{"start":1669,"end":1675}},"directives":[],"loc":{"start":1662,"end":1675}}],"loc":{"start":1585,"end":1677}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":1691,"end":1699}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createJobPost","loc":{"start":1704,"end":1717}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":1718,"end":1723}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobPostInput","loc":{"start":1725,"end":1743}},"loc":{"start":1725,"end":1743}},"loc":{"start":1725,"end":1744}},"directives":[],"loc":{"start":1718,"end":1744}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"JobPost","loc":{"start":1747,"end":1754}},"loc":{"start":1747,"end":1754}},"directives":[],"loc":{"start":1704,"end":1754}}],"loc":{"start":1679,"end":1756}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"JopPostFilterInput","loc":{"start":1764,"end":1782}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"company","loc":{"start":1787,"end":1794}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1796,"end":1802}},"loc":{"start":1796,"end":1802}},"directives":[],"loc":{"start":1787,"end":1802}}],"loc":{"start":1758,"end":1804}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"CreateJobPostInput","loc":{"start":1812,"end":1830}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title","loc":{"start":1835,"end":1840}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1842,"end":1848}},"loc":{"start":1842,"end":1848}},"loc":{"start":1842,"end":1849}},"directives":[],"loc":{"start":1835,"end":1849}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email","loc":{"start":1852,"end":1857}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1859,"end":1865}},"loc":{"start":1859,"end":1865}},"loc":{"start":1859,"end":1866}},"directives":[],"loc":{"start":1852,"end":1866}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"description","loc":{"start":1869,"end":1880}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1882,"end":1888}},"loc":{"start":1882,"end":1888}},"loc":{"start":1882,"end":1889}},"directives":[],"loc":{"start":1869,"end":1889}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"company","loc":{"start":1892,"end":1899}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1901,"end":1907}},"loc":{"start":1901,"end":1907}},"loc":{"start":1901,"end":1908}},"directives":[],"loc":{"start":1892,"end":1908}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"salary","loc":{"start":1911,"end":1917}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1920,"end":1923}},"loc":{"start":1920,"end":1923}},"loc":{"start":1919,"end":1924}},"loc":{"start":1919,"end":1925}},"directives":[],"loc":{"start":1911,"end":1925}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"jobType","loc":{"start":1928,"end":1935}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1937,"end":1943}},"loc":{"start":1937,"end":1943}},"loc":{"start":1937,"end":1944}},"directives":[],"loc":{"start":1928,"end":1944}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"jobCategory","loc":{"start":1947,"end":1958}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1961,"end":1967}},"loc":{"start":1961,"end":1967}},"loc":{"start":1960,"end":1968}},"loc":{"start":1960,"end":1969}},"directives":[],"loc":{"start":1947,"end":1969}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"jobExperience","loc":{"start":1972,"end":1985}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1987,"end":1990}},"loc":{"start":1987,"end":1990}},"loc":{"start":1987,"end":1991}},"directives":[],"loc":{"start":1972,"end":1991}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"jobVacancy","loc":{"start":1994,"end":2004}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2006,"end":2009}},"loc":{"start":2006,"end":2009}},"loc":{"start":2006,"end":2010}},"directives":[],"loc":{"start":1994,"end":2010}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"jobDeadline","loc":{"start":2013,"end":2024}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2026,"end":2032}},"loc":{"start":2026,"end":2032}},"loc":{"start":2026,"end":2033}},"directives":[],"loc":{"start":2013,"end":2033}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"compensation","loc":{"start":2036,"end":2048}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2050,"end":2056}},"loc":{"start":2050,"end":2056}},"loc":{"start":2050,"end":2057}},"directives":[],"loc":{"start":2036,"end":2057}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"englishLevel","loc":{"start":2060,"end":2072}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2074,"end":2080}},"loc":{"start":2074,"end":2080}},"directives":[],"loc":{"start":2060,"end":2080}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"otherLanguages","loc":{"start":2083,"end":2097}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2100,"end":2106}},"loc":{"start":2100,"end":2106}},"loc":{"start":2099,"end":2107}},"loc":{"start":2099,"end":2108}},"directives":[],"loc":{"start":2083,"end":2108}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"jobSkills","loc":{"start":2111,"end":2120}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2123,"end":2129}},"loc":{"start":2123,"end":2129}},"loc":{"start":2123,"end":2130}},"loc":{"start":2122,"end":2131}},"loc":{"start":2122,"end":2132}},"directives":[],"loc":{"start":2111,"end":2132}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"isVisible","loc":{"start":2135,"end":2144}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":2146,"end":2153}},"loc":{"start":2146,"end":2153}},"loc":{"start":2146,"end":2154}},"directives":[],"loc":{"start":2135,"end":2154}}],"loc":{"start":1806,"end":2156}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"JobPost","loc":{"start":2163,"end":2170}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"_id","loc":{"start":2175,"end":2178}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2180,"end":2186}},"loc":{"start":2180,"end":2186}},"loc":{"start":2180,"end":2187}},"directives":[],"loc":{"start":2175,"end":2187}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":2190,"end":2195}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2197,"end":2203}},"loc":{"start":2197,"end":2203}},"loc":{"start":2197,"end":2204}},"directives":[],"loc":{"start":2190,"end":2204}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":2207,"end":2218}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2220,"end":2226}},"loc":{"start":2220,"end":2226}},"loc":{"start":2220,"end":2227}},"directives":[],"loc":{"start":2207,"end":2227}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"salary","loc":{"start":2230,"end":2236}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2239,"end":2242}},"loc":{"start":2239,"end":2242}},"loc":{"start":2238,"end":2243}},"loc":{"start":2238,"end":2244}},"directives":[],"loc":{"start":2230,"end":2244}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"jobType","loc":{"start":2247,"end":2254}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2256,"end":2262}},"loc":{"start":2256,"end":2262}},"loc":{"start":2256,"end":2263}},"directives":[],"loc":{"start":2247,"end":2263}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"jobCategory","loc":{"start":2266,"end":2277}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2280,"end":2286}},"loc":{"start":2280,"end":2286}},"loc":{"start":2279,"end":2287}},"loc":{"start":2279,"end":2288}},"directives":[],"loc":{"start":2266,"end":2288}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"jobExperience","loc":{"start":2291,"end":2304}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2306,"end":2309}},"loc":{"start":2306,"end":2309}},"loc":{"start":2306,"end":2310}},"directives":[],"loc":{"start":2291,"end":2310}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"jobVacancy","loc":{"start":2313,"end":2323}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2325,"end":2328}},"loc":{"start":2325,"end":2328}},"loc":{"start":2325,"end":2329}},"directives":[],"loc":{"start":2313,"end":2329}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"jobDeadline","loc":{"start":2332,"end":2343}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":2345,"end":2353}},"loc":{"start":2345,"end":2353}},"loc":{"start":2345,"end":2354}},"directives":[],"loc":{"start":2332,"end":2354}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"compensation","loc":{"start":2357,"end":2369}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2371,"end":2377}},"loc":{"start":2371,"end":2377}},"loc":{"start":2371,"end":2378}},"directives":[],"loc":{"start":2357,"end":2378}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"jobSkills","loc":{"start":2381,"end":2390}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2393,"end":2399}},"loc":{"start":2393,"end":2399}},"loc":{"start":2393,"end":2400}},"loc":{"start":2392,"end":2401}},"loc":{"start":2392,"end":2402}},"directives":[],"loc":{"start":2381,"end":2402}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isVisible","loc":{"start":2405,"end":2414}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":2416,"end":2423}},"loc":{"start":2416,"end":2423}},"loc":{"start":2416,"end":2424}},"directives":[],"loc":{"start":2405,"end":2424}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"englishLevel","loc":{"start":2427,"end":2439}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2441,"end":2447}},"loc":{"start":2441,"end":2447}},"directives":[],"loc":{"start":2427,"end":2447}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"otherLanguages","loc":{"start":2450,"end":2464}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2467,"end":2473}},"loc":{"start":2467,"end":2473}},"loc":{"start":2467,"end":2474}},"loc":{"start":2466,"end":2475}},"loc":{"start":2466,"end":2476}},"directives":[],"loc":{"start":2450,"end":2476}}],"loc":{"start":2158,"end":2478}}],"loc":{"start":0,"end":2479}} as unknown as DocumentNode