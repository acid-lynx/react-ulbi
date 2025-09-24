import webpack from 'webpack';
import { BuildOptions } from './config/types'

import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      filename: 'index.html',
    }),
    new Dotenv({
      path: options.paths.dotenv,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css'
    }),
    options.isDev && new ReactRefreshWebpackPlugin(),
  ]
}
