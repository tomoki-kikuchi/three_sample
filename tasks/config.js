export const isProduction = process.env.NODE_ENV === 'production';

// 入出力パス
export const PATHS = {
  src: './src/',
  docRoot: './docRoot/',
  dest: './build/',
};

export const scripts = {
  srcRoot: `${PATHS.src}ts`,
  src: `${PATHS.src}ts/**/*.ts`,
  dest: `${PATHS.dest}js`,
};

// export const sass = {
//   src: `${PATHS.src}/scss/**/*.scss`,
//   dest: `${PATHS.src}/css`,
// };
