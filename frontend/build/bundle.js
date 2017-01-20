'use strict';

var foo = 42;

var version = "1.0.0";

var message = 'current version is ' + version;

var main$$1 = function main$$1() {
  console.log(foo);
  console.log(message);
};

main$$1();

if (ENV !== 'production') {
  // Enable LiveReload
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
}

console.log(ENV);
