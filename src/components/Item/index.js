import React from 'react';

import { Container, Block, Centered } from './styled';

import Button from '../Button';

const Item = ({ item }) => {
  return (
    <Container>
      <Block bg={item.img} color={item.color}>
        <Centered>
          <Button url={item.url} color={item.color}>
            view project
          </Button>
        </Centered>
      </Block>
    </Container>
  );
};

export default Item;
