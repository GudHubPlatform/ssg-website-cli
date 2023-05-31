import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    /* BUNDLING WEBCOMPONENTS */
    entry: async () => {
        const { components_list } = await import(path.resolve() + '/config.mjs' + `?t=${new Date().getTime()}`);
        const entries = components_list.map(component => {
            return component.src;
        });
        entries.push('/config.mjs');
        return entries;
    },
    output: {
        path: path.resolve('dist/assets/js'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}