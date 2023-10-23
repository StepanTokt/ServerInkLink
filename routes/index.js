const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const checkRole = require('../middleware/checkRoleMiddleware')


router.use('/user', userRouter)
router.use('/type',typeRouter) //видеть типы
router.use('/brand',brandRouter) //видеть бренды
router.use('/device', deviceRouter) //видеть девайсы
router.use('/basket', basketRouter) //видеть девайсы

module.exports = router