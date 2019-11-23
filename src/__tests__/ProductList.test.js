import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProductList from '../pages/ProductList'
import '../setupTest'

let store
describe('ProductList test', () => {
  beforeEach(() => {
    const mockStore = configureStore()

    store = mockStore([
      {
        name: 'test name',
        desc: 'test desc',
        price: 'test price'
      }
    ])
  })

  it('should render the component productlist from store', () => {
    const wrapper = shallow(<ProductList store={store} />)
    expect(wrapper).not.toBe(null)
  })
})