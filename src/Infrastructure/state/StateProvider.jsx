import React, {useEffect, useReducer} from 'react';
import reducer from "./reducer";
import initState from "./initState";
import AppContext from "./appContext";



const StateProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    dispatch({
      type: "DISPATCH_STATE",
      payload: []
    })

  }, []);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export default StateProvider;
