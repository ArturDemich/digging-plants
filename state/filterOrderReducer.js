import { FILTER_ORDERS} from './types'

const initialState = {
  orders: [],
  filterOrders: []
}

export const filterOrderReducer = (state = initialState, action) => {
  switch (action.type) {   
    case FILTER_ORDERS:
      return { ...state, filterOrders: action.payload }
    default: return state
  }
}