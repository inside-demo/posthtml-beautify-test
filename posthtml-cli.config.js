module.exports = {
  plugins: [
    require('posthtml-beautify')({
        blankLines: false,
        test: console.log('Config 2'),
    }),
  ],
};
