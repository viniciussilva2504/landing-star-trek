    const gulp = require('gulp');
    const sass = require('gulp-sass')(require('sass'));  // Aqui você importa o compilador sass

    // Tarefa para compilar o SCSS em CSS
    gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError)) // Aqui você chama o método sass
        .pipe(gulp.dest('dist/css'));
    });

    // Tarefa default para rodar o build
    gulp.task('default', gulp.series('sass'));
