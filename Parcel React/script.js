import { createRoot } from "react-dom/client"

// console.log("hello javascript")

// const h2 = <h2>Hello JSX</h2>

const root = createRoot(document.getElementById('root'))

function Card(props) {
    const { id, title, image, brand, price } = props
    return (
        <div className="card" key={id}>
            <img src={image} />
            <div>
                <h3>{title}</h3>
                <p>{brand}</p>
                <p><b>${price}</b></p>
            </div>
        </div>
    )
}

// fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data)
//     const container2 = data.products.map((p) =>{
//         return card(p)
//     })

//     root.render(
//         <div className="container">
//             {container2}
//         </div>
//     )
// })

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        root.render(
            <div className="container">
            {data.products.map((product) => {
                return <Card
                    key={product.id}
                    title={product.title}
                    brand={product.brand}
                    price={product.price}
                    image={product.thumbnail}
                />
            })}
            </div>
        )
    })



