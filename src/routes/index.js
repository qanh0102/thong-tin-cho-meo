const catsRouter = require('./cats');
const dogsRouter = require('./dogs');
const meRouter = require('./me');
const catRouter = require('./cat');
const dogRouter = require('./dog');
const homeRouter = require('./home');

function route(app) {

      app.use('/cats', catsRouter);
      app.use('/dogs', dogsRouter);
      app.use('/me', meRouter);
      app.use('/cat', catRouter);
      app.use('/dog', dogRouter);
      app.use('/', homeRouter);
}

module.exports = route;