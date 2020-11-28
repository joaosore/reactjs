import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  ${(props) => css`
    background-image: url(${props.src});
  `};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  background-size: auto 100%;
  background-position: center;
  position: absolute;
  width: 100%;
  transform: translateX(0);
  transition: all 350ms ease-in-out;
  @media only screen and (max-width: 991px) {
    ${(props) =>
      props.dev &&
      css`
        transform: translateX(50%);
      `};
    ${(props) =>
      props.eng &&
      css`
        transform: translateX(-50%);
      `};
  }
`;

export const Box = styled.div`
  ${(props) => css`
    background-image: url(${props.src});
  `};
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: normal;
  flex: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  background-size: auto 100%;
  background-position: center;
  position: absolute;
  width: 100%;
  transform: translateX(0);
  transition: all 350ms ease-in-out;
  @media only screen and (max-width: 991px) {
    z-index: 10;
    ${(props) =>
      props.dev &&
      css`
        transform: translateX(50%);
      `};
    ${(props) =>
      props.eng &&
      css`
        transform: translateX(-50%);
      `};
  }
`;

export const Block = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  ${(props) => props.size <= 991 && props.enable && css`
    display: none;
  `};
  h2 {
    font-size: 2.5em;
    max-width: 175px;
    text-align: end;
    margin-bottom: 1em;
    z-index: 10;
    @media only screen and (max-width: 991px) {
      max-width: 300px;
      padding: 0 15px;
      text-align: center;
    }
  }
`;
