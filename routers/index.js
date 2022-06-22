const customerRouter = require('../components/customers/customers.router');
const roomRouter = require('../components/rooms/rooms.router');
const homeRouter = require('../components/home/home.router');
const authRouter = require('../components/auth/auth.router');
const accountsRouter = require('../components/accounts/accounts.router');

function route(app) {
	// Thêm route vào đây
    app.use('/customers', customerRouter);
	app.use('/room', roomRouter);
	app.use('/dashboard', homeRouter);
	app.use('/', authRouter);
	app.use('/accounts', accountsRouter);
	//

	
	// error handler
	// app.use(function (err, req, res, next) {
	// 	// set locals, only providing error in development
	// 	res.locals.message = err.message;
	// 	res.locals.error = req.app.get("env") === "development" ? err : {};

	// // render the error page
	// 	res.status(err.status || 500);
	// 	res.render("error");
	// });
}

module.exports = route;