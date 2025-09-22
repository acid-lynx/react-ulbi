export interface EnvVariables {
  envType: 'prod' | 'dev';
}


export interface BuildOptions {
  isDev: boolean;
  paths: {
    entry: string;
    output: string;
    html: string;
    dotenv: string;
    srcAlias?: string;
  };
}