const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const path = require('path');

const app = express();
const port = 3000;

//import file routes
const route = require('./routes')

//import DB
const db = require('./config/db')

//connect to DB
db.connect();

//su dung method-override
app.use(methodOverride('_method'))



//cấu hình cho static
app.use(express.static (path.join(__dirname, 'public')));

//apply middleware xu ly du lieu tu form submit len (form html)
app.use(express.urlencoded({
  extended: true
}));
//apply middleware gui du lieu tu client len sever (form js )
app.use(express.json());

// Logger HTTP
app.use(morgan('combined'));

// Template engine
const handlebarsInstance = handlebars.create({ // Tạo một phiên bản của express-handlebars
  //rút ngắn handlebars -> hbs
  extname: '.hbs',
  //
  helpers: {
    sum: (a, b) => a + b,
  }  
});
app.engine('hbs', handlebarsInstance.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//khoi tao route
route(app);

app.listen(port, () => {
  console.log(`Ket noi den localhost ${port}`);
});