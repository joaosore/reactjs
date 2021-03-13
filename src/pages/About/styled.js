import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 600px;
  padding: 15px;
  padding-top: 150px;
  padding-bottom: 100px;
  .seta {
    max-width: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
    img {
      width: 100%;
    }
  }
  .box-conteudo {
    max-width: 550px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      line-height: 1.5;
    }
    .bar {
      width: 1px;
      height: 150px;
      background-color: #FFF;
      margin: 15px;
    }
    .titulo {
      padding: 15px;
    }
  }
`;
