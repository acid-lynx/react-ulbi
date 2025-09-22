import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(s[ac]ss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      generator: {
        filename: 'images/[name].[hash][ext]', // Organized + cache-friendly
      },
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext]',
      },
    },
  ]
}
