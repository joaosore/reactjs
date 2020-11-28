import React from 'react';
import ReactVivus from 'react-vivus';

import LogoSVG from '../../assets/logo.svg';

import { Container } from './styled';

const Logo = () => {


  const end = (obj) => {
    obj.el.getElementById('logo-j').style.fill='#FFF';
    obj.el.getElementById('logo-d').style.fill='#FFF';
  }

  return <Container>
      <ReactVivus
        id="foo"
        option={{
          file: LogoSVG,
          animTimingFunction: 'EASE',
          type: 'oneByOne',
        }}
        callback={end}
      />
    </Container>;
}

export default Logo;
