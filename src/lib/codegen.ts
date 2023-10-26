import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  overwrite: true, // schema: 'http://localhost:3000/api/graphql',
  schema: 'src/graphql/**/schema.graphql',
  debug: false,
  verbose: false,

  generates: {
    'src/graphql/schema': defineConfig({
      typesPluginsConfig: {
        contextType: 'src/graphql/context#GraphqlContext',
        skipTypename: true, // nonOptionalTypename: true,
        maybeValue: 'T | null | undefined',
        // maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null | undefined',

        avoidOptionals: {
          // field: true,
          // inputValue: true,
          // object: true,
          // defaultValue: true,
        }, // defaultMapper: 'any',
        // defaultMapper: 'Partial<{T}>',
      },

      // replace the generated content in every chaged file
    }),
  },
};

export default config;
