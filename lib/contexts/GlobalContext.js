import { createContext } from "react"

export const GlobalContext = createContext()

export function GlobalContextWrapper({ children, value }) {

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
