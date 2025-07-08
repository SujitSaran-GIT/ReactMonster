import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = ({ productId }) => {
    const [deletedProduct, { data, isError, isLoading }] = useDeleteProductMutation()

    if (isError) {
        return <h1>Error.............</h1>
    }

    if (isLoading) {
        return <h1>Loading...............</h1>
    }

    const handleDeleteProduct = async () => {
        try {
            await deletedProduct({id : productId})
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1>Deleted Products</h1>

            {data ? <h1>Product deleted successfully!</h1> : <h1>Waiting...</h1>}
            {isError && <h1>Error deleting product...</h1>}
            {isLoading && <h1>Loading...</h1>}


            <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
        </div>
    )
}

export default DeleteProduct
