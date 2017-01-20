'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var hbs = _interopDefault(require('hbs'));

const app = express();

app.set('view engine', 'html');
app.set('views', './build');

app.engine('html', hbs.__express);
app.use(express.static('build'));

app.get('*', function (req, res) {
  res.render('index', {});
});

app.listen(3000, function () {
  console.log('Express server started at http://localhost:3000/');
});
