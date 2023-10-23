const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/admin', checkRole('ADMIN'), (req, res) => {
  res.status(200).json({message: "Order created"});
});

module.exports = router;
