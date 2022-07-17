export type ThemeType = "dark" | "red" | "some" | "bright"
type ThemeStateType = { theme: ThemeType }

const initState: ThemeStateType = {
   theme: "dark" as ThemeType
};

export const themeReducer = (state = initState, action: ChangeThemeCType): ThemeStateType => { // fix any
   switch (action.type) {
      case "CHANGE-THEME": {
         return {...state, theme: action.value};
      }
      default:
         return state;
   }
};

type ChangeThemeCType = {
   type: "CHANGE-THEME"
   value: ThemeType
}

export const changeThemeC = (theme: ThemeType): ChangeThemeCType => ({type: "CHANGE-THEME", value: theme}); // fix any