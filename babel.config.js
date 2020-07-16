module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@schemas": "./src/graphql/schemas",
          "@resolvers": "./src/graphql/resolvers",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
