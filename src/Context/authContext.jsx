import { createContext, useState } from "react";

let authContext = createContext();

let AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(false)
    let ChangeAuth = () => setAuth(!auth)




  return   <authContext.Provider value={{auth,ChangeAuth}}>{children}</authContext.Provider>



}


export {authContext,AuthProvider}





