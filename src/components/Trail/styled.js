import styled, { css } from 'styled-components';

export const BoxCode = styled.div`
  position: absolute;
  right: 0;
  pointer-events: none;
  z-index: 10;
  width: 100%;
  height: 100%;
  #bg-eng {
    opacity: 0;
    transition: all 350ms ease-in-out;
    min-height: 100%;
    object-fit: cover;
    ${(props) => props.active && css`
      opacity: 1;
    `};
    @media only screen and (max-width: 991px) {
      display: none
    }
  }
`;
