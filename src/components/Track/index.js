import React, { PropTypes } from 'react';
import './styles.css'

const Track = (props) => (
  <li
    className={`Track-li ${props.nowPlaying && 'Track-playing'}`}
    style={{ backgroundImage: `url('${props.image}')` }}
    onClick={() => props.onClick(props.id)} >
    <audio id={props.id} loop>
      <source src={props.source} type="audio/mp3" />
    </audio>
    <p className='Track-info'><strong>{props.artist}</strong> <br /> {props.song}</p>
  </li>
);

Track.propTypes = {
  nowPlaying: PropTypes.bool.isRequired,
  image: PropTypes.string,
  src: PropTypes.string
}

export default Track;
