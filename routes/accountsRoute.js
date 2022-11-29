const express = require('express')
const router = express.Router()
const accountsController = require('../controllers/accountsController')


router.get('/', accountsController.getAllAccounts)

router.get('/:id', accountsController.getAccountData )

module.exports = router