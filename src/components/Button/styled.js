import styled, { css } from 'styled-components';

export const BoxButton = styled.button`
  max-width: 175px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  font-weight: 800;
  z-index: 10;
  span {
    position: relative;
  }
  &::before {
    height: 500%;
    content: "";
    background-color: red;
    position: absolute;
    left: 0;
    width: 0%;
    top: -250%;
    transform: rotateZ(33deg);
    transition: all 350ms ease-in-out;
    ${(props) => css`
      background-color: ${props.color};
    `};
  }
  &:hover {
    color: #FFF;
    &::before {
      width: 110%;
    }
  }
  ${(props) => css`
    border: 2px solid ${props.color};
    color: ${props.color};
    &:hover {
      color: ${props.hover};
    }
  `};
`;
