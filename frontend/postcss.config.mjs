/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "postcss-modules": {
      globalModulePaths: [/global\.css$/],
    },
  },
};

export default config;
