import { FETCH_DATA, FILTER_ORDERS, FILTER_PLANT, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from './types'


export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchData() {
  
   return async dispatch => {
     try {
       dispatch(showLoader())
       const response = await fetch('https://my-json-server.typicode.com/ArturDemich/plant-list-page/orders')
       const json = await response.json()
       setTimeout(() => {
         dispatch({ type: FETCH_DATA, payload: json })
         dispatch(hideLoader())
       }, 500)
     } catch (e) {
       dispatch('Что-то пошло не так')
       dispatch(hideLoader())
     }
   }
}



export function filterOrders(prevState, fild) {
  const dataFilter = prevState.filter(order => {        
    let plantPlace 
    for (let i = 0; i < order.orderItems.length; i++) {
       plantPlace = order.orderItems[i].placing
       if (plantPlace == fild ) {           
            return true
      } 
    }        
  })
  return dispatch => {
    dispatch({
      type: FILTER_ORDERS,
      payload: dataFilter
    })    
  }
} 



export function filterPlants(prevState, fild, name) {
  const plantOrders = []
  prevState.filter(order => {     
    if (name == order.nameClient) {
        let plantPlace 
        for (let i = 0; i < order.orderItems.length; i++) {
          plantPlace = order.orderItems[i].placing           
          if (plantPlace == fild ) {           
            plantOrders.push(order.orderItems[i])
          } 
       }     
    }       
  })
  return dispatch => {
    dispatch({
      type: FILTER_PLANT,
      payload: plantOrders
    })    
  }
}