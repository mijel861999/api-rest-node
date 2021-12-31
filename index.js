const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env || 8000;

//MIDDELWARES
app.use(express.json());

const whitelist = ['http://localhost:5000', 'http://localhost:8000'];
const options = {
	origin: (origin, callback) => {
		if( whitelist.includes(origin) || !origin){
			callback(null, true);
		}else{
			callback(new Error('No puedes utilizar esta API'));
		}
	}
}
app.use(cors(options));

/*
app.get('/', ( req, res ) => {
	res.send('Hola, mi servidor está en express');
})
*/

routerApi(app);

app.use( logErrors );
app.use( boomErrorHandler )
app.use( errorHandler );

app.listen(port, () => {
	console.log(`Mi servidor está corriendo en el puerto ${ port }`)
})


