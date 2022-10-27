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
                    context: 'src/'
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
        return obj;
    }, {}),
    output: {
        path: path.resolve('dist'),
        filename: "[name]"
    },
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}