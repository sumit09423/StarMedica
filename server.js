const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const myAPI = [{
        id: '1',
        API: '/api/v1/product-details'
    }]
    res.send(myAPI);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})