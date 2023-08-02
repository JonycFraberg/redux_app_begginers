import { connect } from "react-redux";
function App({ testStore, onAddTrack }) {
  console.log(testStore);
  let trackInput = {};
  function addTrack() {
    console.log("addTrack:", trackInput.value);
    onAddTrack(trackInput.value);
    trackInput.value = "";
  }
  return (
    <div>
      <input
        type="text"
        ref={(input) => {
          trackInput = input;
        }}
      />
      <button onClick={addTrack}>Add track</button>
      <ul>
        {testStore.map((track, index) => {
          return <li key={index}>{track}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({
    testStore: state,
  }),
  (dispatch) => ({
    onAddTrack: (trackName) =>
      dispatch({ type: "ADD_TRACK", payload: trackName }),
  })
)(App);
