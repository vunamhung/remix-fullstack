module.exports = {
  printWidth: 152,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['^react$', '^react-dom$', '^@remix-run', '^@mantine', '^~/(.*)$', '^[./]', '^react-icons', '<THIRD_PARTY_MODULES>'],
  importOrderTypeImportsToTop: true,
  importOrderTypeImportsToBottom: false,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderSortIndividualImports: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['jsx', 'typescript'],
  plugins: [require('prettier-plugin-tailwindcss'), require('@serverless-guru/prettier-plugin-import-order')],
};
