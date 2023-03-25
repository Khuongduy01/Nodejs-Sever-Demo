const path = require('path')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const { request } = require('http')
const port = 3000
const route = require('./routes/index')


//static file link -- file tĩnh

app.use(express.static( path.join(__dirname,'public')));

//static file link -- file tĩnh

// sử lí dữ liệu submit với phương thức Post 

app.use(express.urlencoded({
  extended: true
}))

// sử lí dữ liệu submit với phương thức Post 

// sử lí dữ liệu gửi lên bằng fetch ,axios .... json ... 

app.use(express.json())

// sử lí dữ liệu gửi lên bằng fetch ,axios .... json ... 

//template engine  == express handlebars
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

// path.join(__dirname, 'resources/views') === C:\Users\khuon\WORK\Duy\Nodejs\src\resources\views

//template engine == express handlebars

route(app);

// wed server start

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// wed server start
