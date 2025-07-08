import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {
    const [addNewProduct, { data, isError, isLoading }] = useAddNewProductMutation()

    if (isError) {
        return <h1>Error ..................</h1>
    }

    if (isLoading) {
        return <h1>Loading .....................</h1>
    }

    const handleAddProduct = async() => {
        try {
            const newProductData = {
                id : 200,
                title : "Amazing T-Shirt",
                brand : "Allensolly"
            }

            await addNewProduct(newProductData)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Add New Product</h1>

            <h3>{data?.id}</h3>
            <h3>{data?.title}</h3>
            <h3>{data?.brand}</h3>

            <button onClick={handleAddProduct} disabled={isLoading}>Add new Product</button>
        </>
    )
}

export default AddNewProduct
