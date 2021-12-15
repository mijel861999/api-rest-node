const express = require('express');

const router = express.Router();

//localhost:3000/users?limit=10&offset=300
router.get('/', (req, res) => {
	const { limit, offset } = req.query;
	if( limit && offset ){
		res.json({
			limit,
			offset
		})
	}else {
		res.send('No hay parámetros')
	}
})

router.get('/miguel', (req, res) => {
	res.json({
		name: 'Miguel',
		lastName: 'Castillo',
		work: 'Dev'
	})
})



module.exports = router;
