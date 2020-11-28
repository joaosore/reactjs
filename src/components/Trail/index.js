import React, { useState, useEffect } from 'react';
import ReactVivus from 'react-vivus';

import TrilhaSVG from '../../assets/trilhas.svg';

import { BoxCode } from './styled';

let time = '';
let path = '';

const end = (obj) => {
  path = obj.el.getElementsByTagName('path');
  time = setInterval(() => {
    var el = randomInt(0, path.length);
    path[el].style.fill='#64DDB8';
    setTimeout(() => {
      path[el].style.fill='transparent';
    }, 350);
  }, 150);
  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
}

const BG_ENG = () => (
  <ReactVivus
    id="bg-eng"
    option={{
      file: TrilhaSVG,
      animTimingFunction: 'EASE',
      type: 'sync',
      duration: 150,
    }}
    style={{ height: '100%', width: '100%' }}
    callback={end}
  />
);

const Trail = ({ active }) => {

  const [reset, setReset] = useState(true);

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  useEffect(() => {
    if(active === false) {
      setTimeout(() => {
        clearInterval(time);
        setReset(false);
      }, 350);
    } else {
      setReset(true);
      if(path !== '') {
        time = setInterval(() => {
          var el = randomInt(0, path.length);
          path[el].style.fill='#64DDB8';
          setTimeout(() => {
            path[el].style.fill='transparent';
          }, 350);
        }, 150);
      }
    }
  });

  return <BoxCode active={active}>
    {reset ? <BG_ENG/> : null}
    </BoxCode>;
}

export default Trail;
