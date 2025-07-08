import React from 'react'
import { useGetAllProductQuery } from '../app/service/dummyData'

const AllProducts = () => {
    const { data, isError, isLoading } = useGetAllProductQuery()
    
    if (isError) {
        return <h1>We got an error</h1>
    }

    if (isLoading) {
        return <h1>Loading.........</h1>
    }

  return (
    <>
      <h1>All Products</h1>
      {data?.products.map((p) => (
        <div key={p.id}>  {/* ✅ Wrap with a single parent element */}
          <h4>Title: {p.title}</h4>
          <li>Description: {p.description}</li>
          <li>Brand: {p.brand}</li>
        </div>  
      ))}
    </>
  )
}

export default AllProducts
