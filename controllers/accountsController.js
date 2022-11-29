const accounts = require('../database/db')

const getAllAccounts = (req,res,next) => {
    res.json(accounts)
}

const getAccountData = (req,res,next) => {
    const id = req.params.id
    console.log('id', id)
    const account = accounts.find(item => item.id === id)
    
    account ? res.json(account) : res.status(404).json({message : 'product not found'})
}

exports.getAllAccounts = getAllAccounts;

exports.getAccountData = getAccountData;