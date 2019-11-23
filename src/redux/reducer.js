import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from './actions'

let id = 1
const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: id++,
          payload: action.payload
        }
      ]

    case REMOVE_PRODUCT:
      return state.filter((product, index) => product.id !== action.id)

    case UPDATE_PRODUCT:
      return state.map(product => {
        if (product.id === action.id) {
          return {
            ...product,
            payload: action.payload
          }
        } else return product
      })

    default:
      return state
  }
}

export default Reducer
