import { connect } from "react-redux";
function App({ tracks, onAddTrack }) {
  console.log(tracks);
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
        {tracks.map((track, index) => {
          return <li key={index}>{track}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({
    tracks: state.tracks,
  }),
  (dispatch) => ({
    onAddTrack: (trackName) =>
      dispatch({ type: "ADD_TRACK", payload: trackName }),
  })
)(App);
