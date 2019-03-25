// Gulp
import { series, parallel, watch } from 'gulp';

// Tasks
import { convertCsvToJson } from './tasks/convert';
import { cleanTask } from './tasks/clean';
import { ejsTask, ejsCacheTask } from './tasks/ejs';
import { eslintTask } from './tasks/eslint';
import { sassCompileTask, sassCacheTask } from './tasks/sass';
import { browserSyncTask, reloadTask } from './tasks/server';
import { optimizeImageTask } from './tasks/optimizeImage';
import { jsCompileTask } from './tasks/scripts';

import { PATHS } from './tasks/config';

function watchTask() {
  watch([`${PATHS.src}**/*.ejs`, '!node_modules'], series(ejsTask, reloadTask));
  watch([`${PATHS.src}**/*.{sass,scss}`, '!node_modules'], sassCompileTask);
  // watch([`${PATHS.src}**/*.js`, `!${PATHS.src}**/*.min.js`, '!node_modules'], jsCompileTask);
  watch([`${PATHS.src}**/*.ts`, '!node_modules'], jsCompileTask);
}

export const start = parallel(series(ejsTask, ejsCacheTask), series(sassCompileTask, sassCacheTask), browserSyncTask, watchTask);
export const build = series(cleanTask, ejsTask, sassCompileTask, jsCompileTask, optimizeImageTask);
export const convert = series(convertCsvToJson);
