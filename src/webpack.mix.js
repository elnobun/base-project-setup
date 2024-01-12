let mix = require('laravel-mix');
let path = require('path');
require('laravel-mix-imgmin');

mix
    .setPublicPath("../dist")
    .options({
        processCssUrls: false
    })

if (!mix.inProduction()) {
    mix
        .alias({
            '@': path.resolve(__dirname, 'ts/'),
            'core': path.resolve(__dirname, 'ts/core/'),
            'modules': path.resolve(__dirname, 'ts/modules/'),
        })
        .ts('ts/script.ts', 'js')
        .sass('scss/site.scss', 'css')
        .sass('scss/vendors/bootstrap.scss', 'css')
        // .imgmin({
        //     input: '../images',
        //     publicPath: '../dist',
        //     output: 'images',
        //     tinyPngKey: 'gvjwGr6QwHTFPtm6BbdMF5vDdfd2l2ZD',
        //     debug: false
        // })
        .webpackConfig({
            devtool: "source-map"
        })
        .sourceMaps()
}

if (mix.inProduction()) {
    mix
        .ts('ts/script.ts', 'js/script.min.js')
        .sass('scss/vendors/bootstrap.scss', 'css/bootstrap.min.css')
        .sass('scss/site.scss', 'css/site.min.css')
}
