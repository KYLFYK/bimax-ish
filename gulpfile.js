let    gulp = require('gulp'); // Подключаем Gulp
let    sass        = require('gulp-sass'); //Подключаем Sass пакет,
let    browserSync = require('browser-sync'); // Подключаем Browser Sync
let    autoprefixer = require('gulp-autoprefixer');

	gulp.task('sass', async function(){ // Создаем таск Sass
        return gulp.src('app/scss/*.scss') // Берем источник
            .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
            .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
            .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
    });
     
    gulp.task('browser-sync', async function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browserSync
            server: { // Определяем параметры сервера
                baseDir: 'app' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });

	gulp.task('scripts', async function() {
        return gulp.src(['app/js/*.js', 'app/libs/**/*.js'])
        .pipe(browserSync.reload({ stream: true }))
    });
     
    gulp.task('code', async function() {
        return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
    });
     
    gulp.task('watch', async function() {
        gulp.watch('app/scss/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
        gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
        gulp.watch(['app/js/*.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
    });
    gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));