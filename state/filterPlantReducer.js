import { FILTER_PLANT} from './types'

const initialState = {
  plant: [],
  filterPlants: []
}

export const filterPlantReducer = (state = initialState, action) => {
  switch (action.type) {   
    case FILTER_PLANT:
      return { ...state, filterPlants: action.payload }
    default: return state
  }
}