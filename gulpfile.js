const { src, dest, series } = require('gulp')
const gulpRename = require('gulp-rename')
const gulpClean = require('gulp-clean')
const gls = require('gulp-live-server')

const TEMP_BUILD_PATH = './temp-run/'

function clean(cb) {
    src(TEMP_BUILD_PATH, { read: false }).pipe(gulpClean())
    cb()
}

function build(cb) {
    src('./call-bind-apply/index.js')
        .pipe(gulpRename('app.js'))
        .pipe(dest(TEMP_BUILD_PATH))
    cb()
}

function copyHtml(cb) {
    src('./index.html').pipe(dest(TEMP_BUILD_PATH))
    cb()
}

function server(cb) {
    const server = gls.static(TEMP_BUILD_PATH, 8888)
    server.start()
    cb()
}

exports.build = build
exports.default = series(clean, build, copyHtml, server)
