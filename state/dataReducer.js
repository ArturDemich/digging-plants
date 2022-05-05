import { FETCH_DATA} from './types'

const initialState = {
  data: [],
  fetchedData: []
}


export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, fetchedData: action.payload }
    default: return state
  }
}