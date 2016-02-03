var elixir = require('laravel-elixir');

elixir.config.assetsPath = './';
elixir.config.css.sass.folder = './';

elixir(function(mix) {
    mix.sass('style.scss','./');
    mix.browserSync({
        server: {
            baseDir: "./"
        },
        proxy: null,
        port: 8888,
        files: [
            '*.css',
            '*.html'
        ]
    });
});

