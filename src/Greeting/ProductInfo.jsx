import React from 'react'

function ProductInfo(){
    const product = {
        name : "Laptop",
        price : 12000,
        availability : true
    }

    const {name,price,availability} = product
    return (
        <>
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.availability ? "Available" : "Not available"}</p>

            {/* Object Destructuring */}
            <p>{name}</p>
            <p>{price}</p>
            <p>{availability ? "Available" : "Not Vailable"}</p>
        </div>
        </>
    )
}
export default ProductInfo