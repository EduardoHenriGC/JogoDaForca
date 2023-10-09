import { ForcaProvider } from "./ForcaContext";


export const AppProvider = ({ children }) => {
  return (
    <ForcaProvider>
      {children}
    </ForcaProvider>
  )
}