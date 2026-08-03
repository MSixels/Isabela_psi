import next from "eslint-config-next";

// eslint-config-next@16 já exporta flat config (next/core-web-vitals +
// next/typescript + ignores). Basta espalhar.
const eslintConfig = [...next];

export default eslintConfig;
