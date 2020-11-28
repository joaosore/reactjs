import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Container, Menu } from './styled';

import Logo from '../Logo';

const Header = () => {
  return <Section>
      <Container>
        <Link to="/"><Logo /></Link>
        <Menu>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/project">project</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </Menu>
      </Container>
    </Section>;
}

export default Header;
