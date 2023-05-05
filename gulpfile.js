const { src, dest } = require('gulp');
const rename = require("gulp-rename");

function defaultTask(cb) {
    src('./call-bind-apply/index.js')
        .pipe(rename("app.js"))
        .pipe(dest('temp-run/'));
    // place code for your default task here
    cb();
}

exports.default = defaultTask