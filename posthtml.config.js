module.exports = {
  plugins: [
    require('posthtml-include')({
        test: console.log('Config 1'),
    }),
  ],
};
