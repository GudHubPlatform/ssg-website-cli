import glob from 'glob';
import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';

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
                        return !resourcePath.includes('assets');
                    }
                },
                /* COPYING ROBOTS.TXT */
                {
                    from: 'robots.txt',
                    to: 'robots.txt',
                    context: 'src/'
                }
            ]
        })
    ],
    /* BUNDLING WEBCOMPONENTS */
    entry: glob.sync('src/assets/js/**/*.js').reduce((obj, el) => {
        obj[el.replace('src/', '')] = './' + el;
        console.log('OBJ', obj);
        return obj;
    }, {}),
    // entry: () => {
    //     const entries = glob.sync('src/assets/js/**/*.js').reduce((obj, el) => {
    //         obj[el.replace('src/', '')] = './' + el;
    //         console.log('OBJ', obj);
    //         return obj;
    //     }, {});

    //     entries['config.mjs'] = ['/src/routes.js', '/src/chapters.js', '/src/redirects.js', '/src/config.js'];

    //     return entries;
    // },
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
                    'style-loader',
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