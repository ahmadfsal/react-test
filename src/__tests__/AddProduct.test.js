import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../setupTest'
import AddProduct from '../pages/AddProduct'

const initialState = {}
const mockStore = configureStore()
let wrapper
let store

describe('AddProduct test', () => {
  const mockSubmit = jest.fn()
  window.alert = jest.fn()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AddProduct />
        </BrowserRouter>
      </Provider>
    )
  })

  it('should be called after input is filled', () => {
    // input name
    wrapper.find('#name').simulate('change', {
      target: {
        name: 'name',
        value: 'laptop'
      }
    })
    // input desc
    wrapper.find('#desc').simulate('change', {
      target: {
        desc: 'desc',
        value: 'laptop bekas'
      }
    })
    // input best price
    wrapper.find('#best_price').simulate('change', {
      target: {
        best_price: 'best_price',
        value: 'laptop'
      }
    })
    // input discount
    wrapper.find('#discount').simulate('change', {
      target: {
        discount: 'discount',
        value: 'laptop'
      }
    })
    // input final price
    wrapper.find('#final_price').simulate('change', {
      target: {
        final_price: 'final_price',
        value: 'laptop'
      }
    })
  })

  it('should be action onSubmit form', () => {
    wrapper.find('#form-add').simulate('submit')
    window.alert.mockClear()
  })
})
