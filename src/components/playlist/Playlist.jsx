import React from 'react'
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({playListTracks, removeTrack}) {

  return (

    <div className="Playlist">
      <input type="text" />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
        listResults={playListTracks}
        removeTrack={removeTrack}
        remove={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
