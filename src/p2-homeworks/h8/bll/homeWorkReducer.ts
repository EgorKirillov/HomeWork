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
         newState.sort((a, b) => a.age - b.age)
         return (action.payload === "up")
           ? newState.sort((a, b) => a.age - b.age)
           : (action.payload === "down")
             ? newState.sort((a, b) => b.age - a.age)
             : newState
      }
      case 'check': {
         return newState.filter(el => el.age >= action.payload)
      }
      
      default:
         return state
   }
}