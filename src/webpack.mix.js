let mix = require('laravel-mix');


if (!mix.inProduction()) {
    mix
        .options({
            processCssUrls: false
        })
        .setPublicPath('../dist')
        .ts('ts/script.ts', 'js')
        .sass('scss/site.scss', 'css')
        .sass('scss/vendors/bootstrap.scss', 'css')
        .webpackConfig({
            devtool: "source-map"
        })
        .sourceMaps()
}

if (mix.inProduction()) {
    mix
        .options({
            processCssUrls: false
        })
        .setPublicPath('../dist')
        .ts('ts/script.ts', 'js/script.min.js')
        .sass('scss/vendors/bootstrap.scss', 'css/bootstrap.min.css')
        .sass('scss/site.scss', 'css/site.min.css')
}
