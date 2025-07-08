import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = ({productId}) => {
    const [updatedProduct, { data, isError, isLoading }] = useUpdateProductMutation()

    if (isError) {
        return <h1>Error.........</h1>
    }

    if (isLoading) {
        return <h1>Loading..........</h1>
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title : "Title updated"
            }

            await updatedProduct({
                id: productId,
                updatedProduct : updatedProductData
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Updated Product</h1>

            <p>{data?.title}</p>

            <button onClick={handleUpdateProduct} disabled={isLoading}>update Product</button>
        </>
    )
}

export default UpdateProduct
