module.exports = async ({ config }) => {
  // Remove default SVG loader.
  config.module.rules.splice(3, 1);

  config.module.rules.push(
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'react-svg-loader',
      ],
    },
  );

  return config;
};