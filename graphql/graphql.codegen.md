```typescript
import type { CodegenConfig } from "@graphql-codegen/cli";

const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT_URL as string;
const graphqlApiKey = process.env.GRAPHQL_X_API_KEY as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [graphqlEndpoint]: {
        // graphqlAPIを叩くための認証APIキー
        headers: {
          "x-api-key": graphqlApiKey,
        },
      },
    },
  ],
  // 解析するコードが格納されているファイル
  documents: ["graphql/**/*.graphql"],
  // 解析するコードのパース先
  generates: {
    "graphql/client/index.ts": {
      config: {
        withHooks: true,
      },
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
    "graphql/client/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
```
