function logErrors ( err, req, res, next ){
	console.log('Log Errors');
	console.log( err );
	next( err );
}

function boomErrorHandler( err, req, res, next ) {
	if( err.isBoom ) {
		const { output } = err;
		res.status( output.statusCode ).json( output.payload );
	}
	next(err);
}

function errorHandler( err, req, res, next ){
	console.log('Error Handler');
	res.status(500).json({
		message: err.message,
		stack: err.stack
	})
}


module.exports = { 
	logErrors,
	errorHandler,
	boomErrorHandler
}
