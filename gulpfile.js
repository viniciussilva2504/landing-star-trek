const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');

// Tarefa para compilar SCSS em CSS
function styles() {
    return gulp.src('./src/styles/*.scss') // Busca os arquivos SCSS
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila e minifica o CSS
        .pipe(gulp.dest('./dist/css')); // Salva o CSS na pasta dist/css
}

// Tarefa para minificar HTML
function html() {
    return gulp.src('./src/*.html') // Busca os arquivos HTML na pasta src
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true })) // Minifica o HTML
        .pipe(gulp.dest('./dist')); // Salva o HTML minificado na pasta dist
}

// Tarefa para observar mudanças em SCSS e HTML
function watch() {
    gulp.watch('./src/styles/*.scss', styles); // Observa mudanças nos arquivos SCSS
    gulp.watch('./src/*.html', html); // Observa mudanças nos arquivos HTML
}

// Exporta as tarefas
exports.styles = styles;
exports.html = html;
exports.default = gulp.series(gulp.parallel(styles, html), watch); // Executa tudo e observa mudanças
