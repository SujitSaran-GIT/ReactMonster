import React from 'react'
import Props from '../material/Props'

function ProductList(){
    const products = [
        {
            id : 1,
            name : "Phone",
            price : "1200"
        },
        {
            id : 2,
            name : "Laptop",
            price : "1500"
        },
        {
            id : 3,
            name : "Headphone",
            price : "500"
        }
    ]

    return (
        <>
        <h1>Product List</h1>
        <div>
            {products.map(({id,name,price}) => (
                <ul key={id}>
                    <li>Product Name:{name}</li>
                    <li>Product Price: ${price}</li>
                </ul>
            ))}
        </div>

        <div>
            {
                products.map((product) => (
                    <ul key={product.id}>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                    </ul>
                ))
            }
        </div>
        <Props/>
        </>
    )
}
export default ProductList