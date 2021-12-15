const express = require('express');

const router = express.Router();

router.get('/', ( req, res ) => {
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

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.json([
		{
			id,
			blue: true,
			green: false
		}
	])
})

module.exports = router;
