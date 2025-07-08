import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../app/features/counter/counterSlice'
import AllProducts from './AllProducts'
import SpecificProduct from './SpecificProduct'
import AddNewProduct from './AddNewProduct'
import UpdateProduct from './UpdateProduct'
import DeleteProduct from './DeleteProduct'

const Counter = () => {
    // Read the data from the store
    const selector = useSelector((state) => state.counter.value)

    // changing the data by sending actions to the store
    const dispatch = useDispatch()
  return (
    <div>
        <h1>React Redux</h1>
        <h2>-----------</h2>
      <h1>{selector}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <AllProducts/>
        <SpecificProduct/>
        <AddNewProduct /> 
        {/* <UpdateProduct productId = {4}/> */}
        <DeleteProduct productId = {4}/>
    </div>
  )
}

export default Counter
