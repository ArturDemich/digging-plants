import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { dataReducer } from './dataReducer'
import { filterOrderReducer } from './filterOrderReducer'
import { filterPlantReducer } from './filterPlantReducer'


export const rootReducer = combineReducers({
    data: dataReducer,
    filterOrder: filterOrderReducer,
    filterPlant: filterPlantReducer,
    app: appReducer
})