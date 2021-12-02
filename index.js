const express = require('express');

const app = express();
const port = 3000;

app.get('/', ( req, res ) => {
	res.send('Hola, mi servidor está en express');
})

app.get('/nueva-ruta', (req, res) => {
	res.send('Hola, soy otra ruta');
})

app.get('/productos', (req, res) => {
	res.json({
		name: 'Miguel',
		lastName: 'Castillo',
		work: 'Dev'
	})
})

app.get('/categories/:id', (req, res) => {
	const { id } = req.params;
	res.json([
		{
			id,
			blue: true,
			green: false
		}
	])
})

app.get('/categories', ( req, res ) => {
	res.json([
		{
			blue: true,
			green: false,
		},
		{
			blue: false,
			red: true,
		}
	])
})


app.listen(port, () => {
	console.log(`Mi servidor está corriendo en el puerto ${ port }`)
})
