import { ResolveOptions } from 'webpack';
import { BuildOptions } from './config/types'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
