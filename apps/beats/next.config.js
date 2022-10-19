const withTM = require("next-transpile-modules")([
  "@user/feature-login",
  "@user/feature-profile",
  "@shared/ui",
  "@mui/material",
  "@survey/feature-reporting",
  "@survey/data-access",
  "@survey/ui",
  "@shared/util-msw"
]);

module.exports = withTM({
  reactStrictMode: true,
});
