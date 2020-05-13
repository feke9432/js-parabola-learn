module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-irregular-whitespace": "off",
    "no-useless-escape": "off"
  },
  globals: {
    $: true,
    baseURL: true,
    layer: true,
    window: true,
    document: true,
    ImBootstrap: true
  },
  parserOptions: {
    parser: "typescript-eslint-parser"
  }
};
