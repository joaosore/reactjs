import styled, { css } from 'styled-components';


export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  position: absolute;
  width: 100%;
  z-index: 100;
`;

export const Container = styled.div`
  max-width: 85%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    padding: 15px;
    display: block;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      background-color: #FFF;
      width: 0;
      display: block;
      transition: all 350ms ease-in-out;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`;
