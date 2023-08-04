import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  overwrite: true, // schema: 'http://localhost:3000/api/graphql',
  schema: 'src/graphql/**/schema.graphql',
  generates: {
    'src/graphql/schema': defineConfig({
      typesPluginsConfig: {
        contextType: 'src/graphql/context#GraphqlContext',
        skipTypename: true, // nonOptionalTypename: true,
      },
    }),
  },
};

export default config;
