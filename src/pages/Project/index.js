import React, { useState } from 'react';
import YouTube from 'react-youtube';

import { Container } from './styled';

import MK_MACBOOK from '../../assets/mk-mackbook.png';

function Projects({ props }) {
  console.log(props);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      playsinline: 1,
      showinfo: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <Container>
      <img src={MK_MACBOOK} alt="" />
      <YouTube videoId="9WEOAqkfVTo" opts={opts} onReady={_onReady} />;
    </Container>
  );
}

export default Projects;
