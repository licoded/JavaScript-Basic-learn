const { src, dest, series } = require('gulp')
const gulpRename = require('gulp-rename')
const gulpClean = require('gulp-clean')
const gls = require('gulp-live-server')

const SRC_PATH = process.argv.slice(2)[1]
const TEMP_BUILD_PATH = './temp-run/'

function clean(cb) {
    return src(TEMP_BUILD_PATH, {
        read: false,
        allowEmpty: true,
    }).pipe(gulpClean())
}

function build(cb) {
    return src(SRC_PATH).pipe(gulpRename('app.js')).pipe(dest(TEMP_BUILD_PATH))
}

function copyHtml(cb) {
    return src('./index.html').pipe(dest(TEMP_BUILD_PATH))
}

function server(cb) {
    const server = gls.static(TEMP_BUILD_PATH, 8888)
    server.start()
    cb()
}

exports.build = build
exports.default = series(clean, build, copyHtml, server)
