const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

//MIDDELWARES
app.use(express.json());

/*
app.get('/', ( req, res ) => {
	res.send('Hola, mi servidor está en express');
})
*/

routerApi(app);

app.listen(port, () => {
	console.log(`Mi servidor está corriendo en el puerto ${ port }`)
})


