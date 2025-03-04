import React from 'react'

const Product = ({name,price}) => {
  return (
    <>
      <h1>Product Details</h1>
      <h3>Product Name: {name}</h3>
      <h3>Product Price: ${price}</h3>
    </>
  )
}

export default Product
