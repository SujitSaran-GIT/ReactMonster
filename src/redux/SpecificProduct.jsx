import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'

const SpecificProduct = () => {
    const { data, isError, isLoading } = useGetProductByIdQuery(6)

    if (isError) {
        return <h1>Error by finding product</h1>
    }

    if (isLoading) {
        return <h1>Loading....</h1>

    }

    return (
        <>
            <h1>Getting Product By Id</h1>
            <h3>{data?.brand}</h3>
            <h3>{data?.price}</h3>
        </>
    )
}

export default SpecificProduct
