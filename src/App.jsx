import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import CreateOrder from './features/order/CreateOrder.jsx'
import Menu, {loader as menuLoader} from './features/menu/Menu.jsx'
import Order from './features/order/Order.jsx'
import AppLayout from './ui/AppLayout.jsx'
import Cart from './features/cart/Cart.jsx'

import Error from './Error.jsx'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:id',
        element: <Order />,
        errorElement: <Error />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/menu',
        loader: menuLoader,
        element: <Menu />
      }    
    ],
    errorElement: <Error />
  }
])

export default function App(){
  return (
  <RouterProvider router = { router }>

  </RouterProvider>
  )
}