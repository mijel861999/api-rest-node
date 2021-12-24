const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();


router.get('/', (req, res)=> {

	const products = service.find();
	/*
	const products = [];
	const { size } = req.query;
	const limit = size || 10;

	for( let i = 0; i < limit; i++ ){
		products.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		})
	}
	*/
	res.json(products);
})

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const product = service.findOne(id);
		
	res.json(product);
})

router.get('/filter', (req, res) => {
	res.send('Yo soy un filter');
})

router.post('/', (req, res) => {
	const body = req.body;
	const newProduct = service.create(body);

	res.status(201).json({
		message: 'created',
		data: newProduct
	})

})

router.patch('/:id', (req, res) =>{

	const { id } = req.params;
	const body= req.body;
	const product = service.update(id, body);

	res.json({
		message: 'update',
		data: product,
	})
})

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const productDeleted = service.delete(id);

	res.json({
		message: 'deleted',
		productDeleted
	})
})

module.exports = router; 
