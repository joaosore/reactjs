import React, { useState } from 'react';

import { BoxButton } from './styled';

const Button = ({ children, color, hover }) => {
  return <BoxButton color={color} hover={hover}><span>{children}</span></BoxButton>
}

export default Button;
