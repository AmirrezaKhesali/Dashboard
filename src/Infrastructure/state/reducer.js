

const appReducer = (state, action) => {
  let newState = state


  switch (action.type) {
    case "DISPATCH_STATE":
      let result = window.localStorage.getItem("state")
      if (result) {
        let parsedData
        try {
          parsedData = JSON.parse(result);
        } catch (e) {
          parsedData = state
        }

        let initState = {
          ...state,
          ...parsedData
        }
        initState.isLoaded = true;
        newState = initState
      } else {
        newState = state
        newState.isLoaded = true;
      }

      break;


    case "LOGIN":
      newState = { ...state, auth: action.payload }
      break;
    case "USER_TEMP":
      newState = { ...state, temp_user: action.payload }
      break;
    case "REGISTERING":
      newState = { ...state, registering: action.payload }
      break;

    case "PRODUCT":
      newState = { ...state, product_data: action.payload }
      break;

    case "IMAGE_PRICE":
      newState = { ...state, image_Price: action.payload }
      break;

    case "CHART":
      newState = { ...state, charts: action.payload }
      break;






  }

  if (newState.isLoaded) {
    window.localStorage.setItem("lastChange", "ADD_TO_CART")
    window.localStorage.setItem("state", JSON.stringify(newState))
  }

  return newState
}

export default appReducer
