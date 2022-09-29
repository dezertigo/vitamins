import replace from 'gulp-replace';
import browsersync from 'browser-sync';
import newer from 'gulp-newer';



// Эскпортируем объект 

export const plugins = {
  replace: replace,
  browsersync: browsersync,
  newer: newer
}