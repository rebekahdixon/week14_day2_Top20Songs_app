import React, {Component, Fragment} from 'react';
import SongList from '../components/SongList';

class TopSongsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs:data.feed.entry}))
  }

  render(){
    return(
    <Fragment>
    <h1>Top 20 Songs</h1>
    <SongList songs={this.state.songs}/>
    </Fragment>
  )
  }

}

export default TopSongsContainer;
