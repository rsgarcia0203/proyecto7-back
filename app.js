
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* variables de clases */ 
var rest_CategoriamenuRouter = require('./routes/rest_Categoriamenu');
var rest_ClienteRouter = require('./routes/rest_Cliente');
var rest_EmpleadoRouter = require('./routes/rest_Empleado');
var rest_FacturaRouter = require('./routes/rest_Factura');
var rest_IngredienteRouter = require('./routes/rest_Ingrediente');
var rest_MesaRouter = require('./routes/rest_Mesa');
var rest_MesareservaRouter = require('./routes/rest_Mesareserva');
var rest_OrdenRouter = require('./routes/rest_Orden');
var rest_OrdendetalleRouter = require('./routes/rest_Ordendetalle');
var rest_ProductoRouter = require('./routes/rest_Producto');
var rest_ProveedorRouter = require('./routes/rest_Proveedor');
var rest_ValoracionesRouter = require('./routes/rest_Valoraciones');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* rutas de las routes/<variables> */
app.use('/rest/rest_Categoriamenu', rest_CategoriamenuRouter);
app.use('/rest/rest_Cliente', rest_ClienteRouter);
app.use('/rest/rest_Empleado', rest_EmpleadoRouter);
app.use('/rest/rest_Factura', rest_FacturaRouter);
app.use('/rest/rest_Ingrediente', rest_IngredienteRouter);
app.use('/rest/rest_Mesa', rest_MesaRouter);
app.use('/rest/rest_Mesareserva', rest_MesareservaRouter);
app.use('/rest/rest_Orden', rest_OrdenRouter);
app.use('/rest/rest_Ordendetalle', rest_OrdendetalleRouter);
app.use('/rest/rest_Producto', rest_ProductoRouter);
app.use('/rest/rest_Proveedor', rest_ProveedorRouter);
app.use('/rest/rest_Valoraciones', rest_ValoracionesRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
