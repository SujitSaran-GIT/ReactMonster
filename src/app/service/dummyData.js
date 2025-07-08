import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({baseUrl : "https://dummyjson.com"}),
    endpoints : (builder) => ({
        // Get All Products
        getAllProduct : builder.query({
            query : () => '/products'
        }),
        
        // Get Product By Id
        getProductById : builder.query({
            query : (id) => `/products/${id}`
        }),
        addNewProduct : builder.mutation({
            query : (newProduct) => ({
                url : `/products/add`,
                method : "POST",
                headers : {"Content-type":"application/json"},
                body : newProduct
            })
        }),
        updateProduct : builder.mutation({
            query : ({id,updatedProduct}) => ({
                url : `/products/${id}`,
                method : "PUT",
                headers : {"Content-type":"application/json"},
                body : updatedProduct
            }),
        }),

        deleteProduct : builder.mutation({
            query : ({id}) => ({
                url : `/products/${id}`,
                method : "DELETE",
                headers : {"Content-type":"application/json"},
            }),
        }),
    }),
});


export const { useGetAllProductQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi