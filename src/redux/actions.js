export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const addProduct = payload => ({
  type: ADD_PRODUCT,
  payload: payload
})

export const deleteProduct = id => ({
  type: REMOVE_PRODUCT,
  id
})

export const updateProduct = (id, payload) => ({
  type: UPDATE_PRODUCT,
  id,
  payload
})