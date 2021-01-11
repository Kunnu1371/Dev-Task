const router = require('express').Router()

const { user } = require('../controller/index')
const { validator } = require('../validator/index')
router.post('/test', validator, user)

module.exports = router;