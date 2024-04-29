import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import Routes from './Routes/Routes'
import { Provider } from 'react-redux'
import store from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={Routes} />
  </Provider>,
)
