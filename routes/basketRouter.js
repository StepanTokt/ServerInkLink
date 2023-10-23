const Router = require('express')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const basketController = require('../controllers/basketController')

router.post('/', basketController.create)
router.get('/', basketController.getAll)

module.exports = router