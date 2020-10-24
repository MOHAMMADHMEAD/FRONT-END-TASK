const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss')('./configs/tailwind.config.js'),
            require('autoprefixer'),
            purgecss({
              content: ['./**/*.html'],
              css: ["**/*.css"],
              // Example to let PurgeCss know how to exclude cdk and mat prefixes if your using Angular CDK and Angular Material
              whitelistPatterns: [/^cdk-|mat-/],
              defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            })
          ]
        }
      }
    ]
  }
};
