export type StateType = { isloading: boolean }

const initState: StateType = {
   isloading: false
}

export const loadingReducer = (state = initState, action: loadingACType): StateType => { // fix any
   switch (action.type) {
      case 'LOADING': {
         return {...state, isloading: action.isloading} // return { isloading: action.isloading}
      }
      default:
         return state
   }
}

type loadingACType = {
   type: "LOADING"
   isloading: boolean
}
export const loadingAC = (isloading: boolean): loadingACType => ({type: "LOADING" as const, isloading}) // fix any