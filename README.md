# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## What is React
React is a free and open source javascript library specifically designed for building user interfaces

Developed by Facebook in 2011
React is the most popular, powerful frontend library developed and sponsered by facebook

Use components Model
A component is a piece of the ui that has it's own logic and appearance. A component can be small as a button or large as entire page

## Installation Process OF ReactJs
D:\React Monster>npm create vite@latest
Need to install the following packages:
create-vite@6.3.1
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  Frontend
│
◇  Package name:
│  frontend
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in D:\React Monster\Frontend...
│
└  Done. Now run:

  cd Frontend
  npm install
  npm run dev


D:\React Monster>cd Frontend

D:\React Monster\Frontend>npm install

added 148 packages, and audited 149 packages in 24s

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\React Monster\Frontend>npm run dev

> frontend@0.0.0 dev
> vite


  VITE v6.2.0  ready in 331 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


Discuss About All the files and Folders
-----------------------------------------


## Components
components are independent & reusable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML.

## JSX js+xml
JSX allows us to write HTML in React. 
JSX makes it easier to write and add HTML in React.


## Expression In JSX {2+2}
With JSX you can write expressions inside curly braces. The expressions can be a react variable, or property, or any other valid Javascript expression. JSX will execute the expression and return the result

## Lists in React
In react, you will render lists with some type of loop. The javascript map() array method is generally the preferred method

## Props In React
Props/Properties are arguments passed into react components

Props allows us to pass data from parent component to a child component

Props are passed to components via HTML attributes


## Conditional rendering
Conditional rendering allows us to dynamically display different Ui components or content based on specific conditions.

This enables us to create more interactive and responsive user experiences

## State In React
State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useState hook, which allows you to set an initial value and provides a way to update that state

## Hooks In React
Hooks are a new addition in React 16.8. They let you use state and other React features without writting a class

useState()
-----------------
useState Hook allows us to track state in a functionl component. State generally refers to data or properties that need to be tracking in an application



Redux Toolkit and RTK query
------------------------------
Redux
---------
Redux is an open source JavaScript library for managing the state of an application in a predictable way. It is commonly used with libraries like react for building user interfaces but can be used with ay JavaScript framework or library

Redux Toolkit
-----------------
The offical, opinionated, batteries-included toolset for efficient Redux developement

Redux vs Toolkit
-----------------
Redux Makes the state management Easy
Toolkit makes the Redux Easy to work with

what is store?
-----------------
A store is a central place where the state of our application is stored & it can be created using the configureStore function, and it holds the entire state tree of our application

step-1 (Create A Store)
---------------------------
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer : {}
})


step-2 (Provide the Redux Store to React)
----------------------------------------------
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {store} from "./app/store"
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>
)

What is Slice?
----------------
A Slice is a piece of store state and the corresponding reducer logic to update that state. Slices are a way to organize our Redux store by breaking it down into smaller, more manageable parts

Slices Analogy
-----------------
Imagine you have a big cake, and you want to cut it into smaller, more manageable pieces. Each smaller piece is like a "slice" of the cake. In the context redux toolkit a "slice" is like a smaller part of your application's overall state and the instructions on how to change or update that specific part

step-3 Create Slice
--------------------
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "Counter",
    initialState : { value : 0 },
    reducers : {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        }
    }
})

export const {increment, decrement } = counterSlice.actions
export default counterSlice.reducer

Reducers
--------------
Reducers are like the instructions on what to do with each slice of the cake

They define how the information in a particular slice can be changed or updated

Actions
---------------------
Actions are like the requests or commands you give to change a specific slice of the cake 

For example, you might have an action called "Eat a Bite" tht instructs how to take a bite from a slice

step - 4 Add slice Reducers to the store
--------------------------------------------
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice.js'

export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

step-5 Use Redux State and Actions in React components
--------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../app/features/counter/counterSlice'

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
    </div>
  )
}

export default Counter


useSelector() : useSelector hook allows us to read data from the redux store

useDispatch() : The dispatch function is used to send actions to the store, triggering updates to the application state

In simpler terms, it lets you change the state in your Redux store from within your React components

RTK (Redux Toolkit Query)
-------------------------
Redux Toolkit Query (RTK) is specifically designed to simplify data fetching, caching and state management for API calls in a React and Redux application