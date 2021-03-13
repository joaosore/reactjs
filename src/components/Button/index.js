import React from 'react';
import { Link } from 'react-router-dom';

import { BoxButton } from './styled';

const Button = ({ children, color, hover, url }) => {
  return (
    <BoxButton color={color} hover={hover}>
      <Link to={url}>
        <span>{children}</span>
      </Link>
    </BoxButton>
  );
};

export default Button;
