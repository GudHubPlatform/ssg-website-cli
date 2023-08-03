import glob from 'glob';
import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [

                /* COPYING ALL IMAGES */
                {
                    from: 'assets/images',
                    to: 'assets/images',
                    context: 'src/',
                    noErrorOnMissing: true
                },

                /* COPYING CSS FILES */
                {
                    from: 'assets/css/**/*.css',
                    to: '[path][name].css',
                    context: 'src/'
                },

                /* COPYING ALL HTML FILES */
                {
                    from: '**/*.html',
                    to: '[path][name].html',
                    context: 'src/',
                    filter: (resourcePath) => {
                        return !resourcePath.includes('/assets/');
                    },
                    transform: (content, resourcePath) => {
                        return new Promise(resolve => {
                            let string = content.toString();
                            let data = string.split('<body>');
                            let modified = data[0] + '<body><script data-server-only src="https://unpkg.com/@gudhub/core/umd/library.min.js"></script><script data-server-only src="https://www.unpkg.com/@gudhub/gh-component"></script><script data-server-only src="/assets/js/bundle.js"></script>' + data[1];

                            data = modified.split('<head>');
                            modified = data[0] + '<head><script id="base_write_script">document.write(`<base href="${window.MODE === \'production\' ? \'https\' : \'http\'}://${window.constants.website}">`);document.querySelector("#base_write_script").remove();</script>' + data[1];

                            resolve(Buffer.from(modified, 'utf-8'));

                        });
                    }
                },

                /* COPYING ROBOTS.TXT */
                {
                    from: 'robots.txt',
                    to: 'robots.txt',
                    context: 'src/'
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    /* BUNDLING WEBCOMPONENTS */
    entry: () => {
        const entries = glob.sync('./src/assets/js/**/*.js').reduce((obj, el) => {
            obj[el.replace('src/', '')] = el;
            return obj;
        }, {});

        return entries;
    },
    output: {
        path: path.resolve('dist'),
        filename: "[name]"
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
                ],
            }
        ]
    }
}