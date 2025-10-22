import React,{createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:"light",   //variable, we can pass state and method here also, previously we were making usestae in the jsx file but we can also declare them here this way 
    darkTheme: () => {}, //method 
    lightTheme: () => {}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
