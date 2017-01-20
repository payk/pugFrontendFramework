import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import pug from 'rollup-plugin-pug';

export default {
  entry: 'frontend/src/main.js',
  format: 'cjs',
  plugins: [
    json(),
    babel(),
    pug({
      include: 'index.pug',
      locals: { message: 'Hello World' }
    })
  ],
  dest: 'frontend/build/bundle.js'
}
