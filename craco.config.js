module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(gltf|glb)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/models', // Adjust output path as needed
            },
          },
        ],
      });
      return webpackConfig;
    },
  },
};
