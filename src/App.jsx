 import React, { Children } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
 
 export default function App() {

 let routes= createBrowserRouter([
    {path:"",element:<Layout/> ,children:[
        {index:true,path: "react",element:<Home/>},
        {path:"About",element:<About/>},
        {path:"contact",element:<Contact/>},
        {path:"Portfolio",element:<Portfolio/>},
    ]}
])

return <RouterProvider router={routes}></RouterProvider>

 }






    

     
   

 