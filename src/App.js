import { connect } from "react-redux";
import { getTracks } from "./actions/tracks";
function App({ tracks, onAddTrack, onFindTrack, onGetTracks }) {
  console.log(tracks);
  let trackInput = "";
  let searchInput = "";
  function addTrack() {
    console.log("addTrack:", trackInput.value);
    onAddTrack(trackInput.value);
    trackInput.value = "";
  }
  function findTrack() {
    console.log(searchInput.value);
    onFindTrack(searchInput.value);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          ref={(input) => {
            trackInput = input;
          }}
        />
        <button onClick={addTrack}>Add track</button>
      </div>
      <div>
        {" "}
        <input
          type="text"
          ref={(input) => {
            searchInput = input;
          }}
        />
        <button onClick={findTrack}>Find track</button>
        <div>
          <button onClick={onGetTracks}>Get Tracks</button>
        </div>
      </div>
      <ul>
        {tracks.map((track, index) => {
          return <li key={index}>{track.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({
    tracks: state.tracks.filter((track) =>
      track.name.includes(state.filterTracks)
    ),
  }),
  (dispatch) => ({
    onAddTrack: (name) => {
      const payload = { id: Date.now().toString(), name };
      dispatch({ type: "ADD_TRACK", payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: "FIND_TRACK", payload: name });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    },
  })
)(App);
