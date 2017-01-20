import foo from './foo.js';

import { version } from '../../package.json';

const message = `current version is ${version}`;

const main = () => {
  console.log(foo);
  console.log(message);
};

main();


if (ENV !== 'production') {
  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}

console.log(ENV);
