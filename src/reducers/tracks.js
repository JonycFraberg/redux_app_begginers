const initialState = ["Track1", "Track2"];
export default function tracks(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_TRACK") {
    return state;
  }
  //console.log(action);
  return state;
}
