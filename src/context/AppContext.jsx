import { ForcaProvider } from "./ForcaContext";


export const AppProvider = ({children,session}) => {



    return (
    
      <ForcaProvider>
      
    
        
  {children}



  </ForcaProvider>
    
    
    )
}