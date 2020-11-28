import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import AudioMP3 from '../../assets/backgrond.mp3';

function Audio() {
  return <ReactAudioPlayer src={AudioMP3} loop autoPlay preload="auto" />;
}

export default Audio;
