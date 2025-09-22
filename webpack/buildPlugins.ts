import webpack from 'webpack';
import { BuildOptions } from './config/types'

import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      filename: 'index.html',
    }),
    new Dotenv({
      path: options.paths.dotenv,
    }),
    options.isDev && new ReactRefreshWebpackPlugin(),
  ]
}
