import React, {Component, Fragment} from 'react';
import Song from './Song';

class SongList extends Component{
  render() {
    const songs = this.props.songs.map((song, index) => {
      return(
        <Song key={index} title={song["im:name"].label} position={index + 1} artist={song["im:artist"].label} category={song.category.attributes.label} image={song["im:image"][2].label}> </Song>)
      });

     return(
       <Fragment>
       {songs}
       </Fragment>
     );
  }
}

export default SongList;
