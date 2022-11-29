const express = require('express')

const accountRoute = require('./routes/accountsRoute')
const app = express()
const port = 8080



app.use('/api/accounts', accountRoute)


app.listen(port, ()=>{
    console.log(`the app is running on port ${port}`)
})
