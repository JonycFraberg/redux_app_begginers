import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initialState = {
  tracks: ["Track1", "Track2"],
  playlist: ["playlist1", "playlist2"],
};

// функция reducer
function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return {
      ...state,
      tracks: [...state.tracks, action.payload],
    };
  } else if (action.type === "DELETE_TRACK") {
    return state;
  } else if (action.type === "ADD_PLAYLIST") {
    return state;
  } else if (action.type === "DELETE_PLAYLIST") {
    return state;
  }
  //console.log(action);
  return state;
}
const store = createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // хранилище данных в приложении

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createStore } from "redux";

// function playlist(state = [], action) {
//   if (action.type === "ADD_TRACK") {
//     return [...state, action.payload];
//   }
//   //console.log(action);
//   return state;
// }

// const store = createStore(playlist); // хранилище данных в приложении

// const addTrackBtn = document.querySelectorAll(".addTrack")[0];
// const trackInput = document.querySelectorAll(".trackInput")[0];
// const list = document.querySelectorAll(".list")[0];

// console.log(store.getState()); // выводим соостояние нашего хранилища

// store.subscribe(() => {
//   console.log("subscribe", store.getState());

//   list.innerHTML = "";
//   trackInput.value = "";
//   store.getState().forEach((track) => {
//     const li = document.createElement("li");
//     li.textContent = track;
//     list.appendChild(li);
//   });
// }); // отслеживаем изменения в хранилище

// addTrackBtn.addEventListener("click", () => {
//   const trackName = trackInput.value;
//   //console.log("name: ", trackName);
//   store.dispatch({ type: "ADD_TRACK", payload: trackName }); // меняем значения в store, принимает объект и  type - обязателен
// });

// //store.dispatch({ type: "ADD_TRACK", payload: "Enter Sandman" });
