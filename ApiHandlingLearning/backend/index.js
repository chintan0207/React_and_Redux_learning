import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "table wood",
            price: 550
        },
        {
            id: 2,
            name: "plastic table",
            price: 250
        }, {
            id: 3,
            name: "fiber table",
            price: 300
        }, {
            id: 4,
            name: "rubber table",
            price: 650
        }
    ]
    // http://localhost:3000/api/products?search=wood

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

app.listen(port, () => {
    console.log(`port listening on ${port}`)
})