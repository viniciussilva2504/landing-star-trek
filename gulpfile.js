const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const mkdirp = require('mkdirp');

// Tarefa para compilar SCSS em CSS
function styles() {
    console.log('Iniciando a tarefa de estilos...');
    mkdirp.sync('./dist/css'); // Cria a pasta dist/css se não existir
    console.log('Pasta dist/css criada ou já existente.');
    return gulp.src('./src/styles/*.scss') // Busca os arquivos SCSS
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila e minifica o CSS
        .pipe(gulp.dest('./dist/css')) // Salva o CSS na pasta dist/css
        .on('end', () => console.log('Tarefa de estilos concluída!'))
        .on('error', (err) => console.error('Erro na tarefa de estilos:', err));
}

// Tarefa para minificar HTML
function html() {
    return gulp.src('./src/*.html') // Busca os arquivos HTML na pasta src
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true })) // Minifica o HTML
        .pipe(gulp.dest('./dist')); // Salva o HTML minificado na pasta dist
}

function scripts() {
    console.log('Iniciando a tarefa de scripts...');
    mkdirp.sync('./dist/js'); // Cria a pasta dist/js se não existir
    console.log('Pasta dist/js criada ou já existente.');
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'))
        .on('end', () => console.log('Tarefa de scripts concluída!'))
        .on('error', (err) => console.error('Erro na tarefa de scripts:', err));
}

// Tarefa para observar mudanças em SCSS e HTML
function watch() {
    gulp.watch('./src/styles/*.scss', styles); // Observa mudanças nos arquivos SCSS
    gulp.watch('./src/*.html', html); // Observa mudanças nos arquivos HTML
    gulp.watch('./src/js/*.js', scripts); // Observa mudanças nos arquivos JS
}

// Exporta as tarefas
exports.styles = styles;
exports.html = html;
exports.scripts = scripts;
exports.default = gulp.series(gulp.parallel(styles, html, scripts), watch); // Executa tudo e observa mudanças
