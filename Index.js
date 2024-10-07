// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Components/About';
import Error from './Components/Error';
import Body from './Components/Body';
import Contact from './Components/Contact';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


const rerouter=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
            path:'/',
            element:<Body/>
          },
        {
            path:'/about',
            element:<About/>
          },
          {
            path:'/contact',
            element:<Contact/>
          },



    ]
    },


  ])
  

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={rerouter} />
  );
