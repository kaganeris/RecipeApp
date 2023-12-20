import { createContext } from "react";


export const ConditionalContext = createContext()

export const ConditionalContextProvider = ({children}) => {

    return <ConditionalContext.Provider>
        {children}
    </ConditionalContext.Provider>
}