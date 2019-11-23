import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import ProductList from './pages/ProductList'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import Reducer from './redux/reducer'

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(Reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className='topnav'>
              <h1 className='logo'>Logo</h1>
            </div>
            <div className='content'>
              <div className='sidenav'>
                <Link to='/' className='link'>
                  Product List
                </Link>
                <Link to='/add' className='link'>
                  Add Product
                </Link>
              </div>
              <div className='main'>
                <Switch>
                  <Route path='/' component={ProductList} exact />
                  <Route path='/add' component={AddProduct} exact />
                  <Route path='/edit/:id' component={EditProduct} exact />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
