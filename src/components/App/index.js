import React, { Component } from 'react';
import Header from '../Header';
import Video from '../Video';
import Search from '../Search';
import TrackList from '../TrackList';
import assetVideo from '../../assets/video.mp4';
import {search} from '../HelperFunction';
import './styles.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      tracks: []
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    /**
    * TODO Based on search query from the state, get array of 4 tracks
    * from Spotify's API and update our tracks state with this data. Handle error
    * response in a simple console.error log
    *
    * Spotify API docs: https://developer.spotify.com/web-api/endpoint-reference
    */
    this.setState({ query: event.target.value }, () => {
      search(
        this.state.query
      )
      .then(results => {
        console.log(results.tracks.items)
        this.setState({tracks: results.tracks.items.splice(0,4) });
      }, error =>{});

   })
  }

  render() {
    return (
      <main>
        <div className="App-container">
          <Header />
          <Search onChange={this.onSearchChange} value={this.state.query} />
          <TrackList tracks={this.state.tracks} />
        </div>
        <Video src={assetVideo} autoPlay loop muted />
      </main>
    );
  }
}

export default App;
