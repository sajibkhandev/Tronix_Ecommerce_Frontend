import React from 'react'
import RootLayOut from './components/RootLayOut';
import Home from './pages/Home';
import About from './pages/About';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayOut />} >
         <Route
         path="/"
         element={<Home />} >
         </Route>
         <Route
         path="/about"
         element={<About />} >
         </Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App