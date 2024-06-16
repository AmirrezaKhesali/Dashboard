import {useContext} from "react";
import AppContext from "./appContext";




const useAppState = () => {
  return useContext(AppContext)
}

export default useAppState
