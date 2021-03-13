import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    h1 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
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
`;
