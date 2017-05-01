
export default (state = {current_state: "one"}, action) => {
  switch (action.type) {
    case 'URLS_LOADED':
      return {...state, ...action.data, current_state: "two"} 
    case 'BUTTON_CLICKED':
        console.log("BUTTON_CLICKED reducer");
        return state;
    default:
      return state;
  }
}