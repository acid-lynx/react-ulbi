import path from 'path';

import { EnvVariables, BuildOptions } from './webpack/config/types'
import { buildLoaders } from './webpack/buildLoaders'
import { buildPlugins } from './webpack/buildPlugins'
import { buildResolvers } from './webpack/buildResolvers'

export default (env: EnvVariables) => {
  const options: BuildOptions = {
    isDev: env.envType === 'dev',
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      dotenv: path.resolve(__dirname, 'webpack', `.env.${ env.envType }`),
    },
  }

  return {
    mode: options.isDev ? 'development' : 'production',
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: 'bundle.js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: {
      port: 3000,
      hot: true,
      liveReload: true,
    },
  }
}
