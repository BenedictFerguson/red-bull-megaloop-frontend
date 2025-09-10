import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';
import * as path from 'node:path';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['>0.5%', 'last 2 versions and last 4 years', 'not dead'];

export default defineConfig({
    context: __dirname,
    entry: {
        main: './src/index.tsx',
    },
    resolve: {
        extensions: ['...', '.ts', '.tsx'],
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@enums': path.resolve(__dirname, './src/enums'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@services': path.resolve(__dirname, './src/services'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@types': path.resolve(__dirname, './src/types.d'),
        },
    },
    devServer: {
        allowedHosts: 'all',
    },
    experiments: {
        css: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: /node_modules/,
                type: 'asset',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'postcss-loader',
                    },
                ],
                type: 'css/auto',
            },
            {
                test: /\.tsx$/,
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
                                        development: true,
                                        refresh: true,
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
        new rspack.HtmlRspackPlugin({
            template: './src/index.html',
        }),
        new RefreshPlugin(),
    ],
});
