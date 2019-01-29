import React, { Component } from 'react';
import TopSongsContainer from './containers/TopSongsContainer';
import SongList from './components/SongList';
import './App.css';

class App extends Component {
  render() {
    return (
      <TopSongsContainer />
    );
  }
}

export default App;
