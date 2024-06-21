import './App.css'
import Home from './pages/Home/Home'
import Category from './pages/category/Category'
import Details from './pages/details/Details'
import Cart from './pages/cart/Cart'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Layout'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (<Layout/>),
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"category/:id",
          element: <Category/>
        },
        {
          path:"detail/:id",
          element: <Details/>
        },
        {
          path:"cart",
          element: <Cart/>
        }
      ]
    },
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
