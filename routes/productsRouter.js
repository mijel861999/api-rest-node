const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();


router.get('/', async (req, res)=> {

	const products = await service.find();
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

router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		
		res.json(product);
	}catch ( err ){
		next( err );
	}
	
})

router.get('/filter', (req, res) => {
	res.send('Yo soy un filter');
})

router.post('/', async (req, res) => {
	const body = req.body;
	const newProduct = await service.create(body);

	res.status(201).json({
		message: 'created',
		data: newProduct
	})

})

router.patch('/:id', async (req, res, next) =>{

	try {
		const { id } = req.params;
		const body= req.body;
		const product = await service.update(id, body);

		res.json({
			message: 'update',
			data: product,
		})
	} catch( e ){
		next( e );	
	}
	
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const productDeleted = await service.delete(id);

	res.json({
		message: 'deleted',
		productDeleted
	})
})

module.exports = router; 
