'use strict';

const gulp = require('gulp');
const assert = require('assert');
const { exec } = require('child_process');
const fs = require('fs');
const clean = require('gulp-clean');
const pump = require('pump');

gulp.task('clean', () => {
  return pump([
    gulp.src(['test/*.tpl.html', 'test/*.json'], { read: false }),
    clean()
  ]);
});


gulp.task('test', ['clean'], () => {
  exec('node index.js test/test.html', (error, stdout, stderr) => {
    if(error || stderr) {
      //error
      assert.fail('test file not exist.');
    } else {
      //check if layout and data are generated
      if(fs.existsSync('test/test.tpl.html') && fs.existsSync('test/test.json')) {
        //success
        assert.ok(true);
      } else {
        //error
        assert.fail('layout or/and data file not generated.');
      }
    }
  });
});
