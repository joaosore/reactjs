import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 70%;
  height: 0; /* A mágica está aqui */
  padding-bottom: 70%; /* ... e está aqui */
  margin: 1%;
  float: left;
  position: relative;
  @media only screen and (max-width: 991px) {
    width: 90%;
    padding-bottom: 90%;
  }
`;

export const Block = styled.div`
  position: absolute;
  text-align: center;
  background: #1a1a1a;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => css`
    background-image: url(${props.bg});
    border: 2px solid ${props.color};
  `};
  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`;

export const Centered = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 80%;
  color: #fff;
`;
