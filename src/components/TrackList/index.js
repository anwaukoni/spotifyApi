import React, { Component, PropTypes } from 'react';
import Track from '../Track';
import './styles.css';

class TrackList extends Component {
  constructor() {
    super()
    this.state = {
      nowPlaying: '',
      prevPlaying:''
    }
    this.playPause = this.playPause.bind(this)
  }

  playPause(audioID) {
    const audio = document.getElementById(audioID)
    let prevAudio = document.getElementById(audioID)

    //check if there is already an id in the nowPlaying state
    //if the existing id does not match the new id of the song that has been clicked
    //pause audio
    //change state to new id
    //play audio


    if(!this.state.prevPlaying){
      this.setState({ prevPlaying: prevAudio.id });
    }

    // if(this.state.nowPlaying !== this.state.prevPlaying) {
    //   prevAudio.pause()
    //   this.setState({prevPlaying: audio.id})
    //   prevAudio = audio
    // }

    if(audio.paused) {
      /**
       * TODO Before we start playing selected audio element, ensure
       * that all others are paused, so we don't have audio overlapping
       */
      this.setState({ nowPlaying: audio.id }, () => {
        audio.play()
      })

    } else if(!audio.paused && this.state.nowPlaying === this.state.prevPlaying) {
      this.setState({ nowPlaying: '' })
      audio.pause()

    }else if (!audio.paused && this.state.nowPlaying !== this.state.prev.Playing) {
        // audio.pause()
        this.playPause()
        this.setState({prevPlaying: audio.id}, ()=>{
          prevAudio.pause()
          prevAudio = audio

        })
    }

    // if(audio.paused) {
    //
    //   this.setState({ nowPlaying: audio.id }, () => {
    //     audio.play()
    //   })
    //
    // } else {
    //   this.setState({ nowPlaying: '' })
    //   audio.pause()
    // }
  }

  render() {
    return (
      <ul className="TrackList-ul">
        {this.props.tracks.map((track, index) => {
          return (
            <Track
              nowPlaying={this.state.nowPlaying === track.id}
              image={track.album.images[0].url}
              source={track.preview_url}
              onClick={this.playPause}
              id={track.id}
              artist={track.artists[0].name}
              song={track.name}
              key={`track-${index}-${track.id}`} />
          )
        })}
      </ul>
    )
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array
}

TrackList.defaultProps = {
  tracks: []
}

export default TrackList;
