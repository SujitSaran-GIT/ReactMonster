import React from 'react'

function ProductInfo(){
    const product = {
        name : "Laptop",
        price : 12000,
        availability : true
    }
    return (
        <>
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.availability ? "Available" : "Not available"}</p>
        </div>
        </>
    )
}
export default ProductInfo