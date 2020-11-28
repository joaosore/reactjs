import styled, { css } from 'styled-components';

export const BoxCode = styled.div`
  position: absolute;
  right: 0;
  pointer-events: none;
  #bg-code {
    opacity: 0;
    transition: all 350ms ease-in-out;
    ${(props) => props.active && css`
      opacity: 1;
    `};
    @media only screen and (max-width: 991px) {
      display: none
    }
  }
`;
