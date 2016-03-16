process.env.DISABLE_NOTIFIER = true;

var gulp    = require('gulp');
var watch   = require('gulp-watch');
var elixir  = require('laravel-elixir');

elixir.config.js.browserify.watchify = {
    enabled: true,
    options: {
        poll: true
    }
}


/*
 |----------------------------------------------------------------
 | Have a Drink
 |----------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic
 | Gulp tasks for your Laravel application. Elixir supports
 | several common CSS, JavaScript and even testing tools!
 |
 */

elixir(function(mix)
{
    mix.styles([

        '**/*.css',
        '**/*.scss',

    ], "./dist/css/styles.min.css", "src/assets");

    mix.browserify([
        "main.js"
    ], "./dist/js/main.js", "src/").version('./dist/js/main.js');

    // elixir.config.registerWatcher("default", "resources/**");
});
