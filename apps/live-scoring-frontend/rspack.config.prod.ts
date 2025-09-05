import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { defineConfig } from '@rspack/cli';
import { TsCheckerRspackPlugin } from 'ts-checker-rspack-plugin';
import { componentBuildConfig } from './component-build.config.prod';
import * as path from 'node:path';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['>0.5%', 'last 2 versions and last 4 years', 'not dead'];

export default defineConfig({
    context: __dirname,
    mode: 'production',
    entry: {
        main: './src/main.tsx',
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@enums': path.resolve(__dirname, './src/enums'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@services': path.resolve(__dirname, './src/services'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@types': path.resolve(__dirname, './src/types.d'),
        },
        extensions: ['...', '.ts', '.tsx'],
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '',
        filename: `${componentBuildConfig.libraryName}-${componentBuildConfig.componentVersion}.js`,
        library: {
            name: componentBuildConfig.libraryName,
            type: 'amd',
        },
        clean: true,
    },
    devtool: false,
    experiments: {
        css: true,
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                type: 'asset',
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                type: 'javascript/auto',
            },
            {
                test: /\.(jsx?|tsx?)$/,
                use: [
                    {
                        loader: 'builtin:swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'typescript',
                                    tsx: true,
                                },
                                transform: {
                                    react: {
                                        runtime: 'automatic',
                                        development: false,
                                    },
                                },
                            },
                            env: { targets },
                        },
                    },
                ],
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: {
                            syntax: 'typescript',
                        },
                    },
                    env: { targets },
                },
                type: 'javascript/auto',
            },
        ],
    },
    plugins: [
        new TsCheckerRspackPlugin(),
        process.env.RSDOCTOR &&
            new RsdoctorRspackPlugin({
                supports: {
                    generateTileGraph: true,
                },
            }),
    ].filter(Boolean),
});
