import React from 'react';

import SetaSVG from '../../assets/seta.svg';

import { Container } from './styled';

const Title = ({ type, descriptopn }) => {
  return (
    <Container>
      <div className="title">
        <h1>{type}</h1>
        <p>{descriptopn}</p>
      </div>
      <div className="seta">
        <img src={SetaSVG} alt="" />
      </div>
    </Container>
  );
};

export default Title;
