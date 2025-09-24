import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './config/types'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(s[ac]ss|css)$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resourcePath: string) => resourcePath.includes('.module.'),
              localIdentName: isDev ? '[file]__[hash:base64:5]' : '[hash:base64:8]',
            },
          },
        },
        'sass-loader',
      ],
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
