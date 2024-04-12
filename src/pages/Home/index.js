import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import BackgroundImg from '../../assets/background.png';
import Button from '../../components/Button';
import Code from '../../components/Code';
import Trail from '../../components/Trail';

import { Container, Background, Box, Block } from './styled';

function Home() {
  const [dev, setDev] = useState(true);
  const [eng, setEng] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDev(false);
      setEng(true);
    },
    onSwipedRight: () => {
      setDev(true);
      setEng(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const [devAnimate, setDevAnimate] = useState(false);
  const [engAnimate, engDevAnimate] = useState(false);

  const hangleAnimeteDev = (status) => {
    setDevAnimate(status);
  };

  const hangleAnimeteEng = (status) => {
    engDevAnimate(status);
  };

  const size = useWindowSize();

  return (
    <Container {...handlers}>
      <Box>
        <Block
          enable={dev}
          size={size.width}
          onMouseEnter={() => hangleAnimeteDev(true)}
          onMouseLeave={() => hangleAnimeteDev(false)}
        >
          <h2 className="dev">FRONT E BACK</h2>
          {/* <Button color="#36BFF4">see more</Button> */}
          <Code active={devAnimate} />
        </Block>
        <Block
          enable={eng}
          size={size.width}
          onMouseEnter={() => hangleAnimeteEng(true)}
          onMouseLeave={() => hangleAnimeteEng(false)}
        >
          <h2 className="eng">COMPUTER ENGINEER</h2>
          {/* <Button color="#64DDB8">see more</Button> */}
          <Trail active={engAnimate} />
        </Block>
      </Box>
      <Background src={BackgroundImg} dev={dev} eng={eng} />
    </Container>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default Home;
