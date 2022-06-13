import {UserType} from "../HW8";

export const sortUpActionCreator = () => ({
   type: "sort",
   payload: "up",
} as const)
export const sortDownActionCreator = () => ({
   type: "sort",
   payload: "down",
} as const)
export const check18ActionCreator = (num: number) => ({
   type: "check",
   payload: num,
})
export type homeWorkReducerStateType =
  ReturnType<typeof sortUpActionCreator>
  | ReturnType<typeof sortDownActionCreator>
  | ReturnType<typeof check18ActionCreator>

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerStateType): UserType[] => { // +need to fix any
   let newState = state.map(el => ({_id: el._id, name: el.name, age: el.age}))
   switch (action.type) {
      case 'sort': {
         return (action.payload === "up")
           ? newState.sort((a, b) => (a.name<b.name)? -1:0)
           : (action.payload === "down")
             ? newState.sort((a, b) => ((b.name<a.name)? -1:0))
             : newState
      }
      case 'check': {
         return newState.filter(el => el.age >= action.payload)
      }
      
      default:
         return state
   }
}