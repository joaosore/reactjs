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
  .title {
    h1 {
      margin-bottom: 10px;
    }
    p {
      text-align: center;
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
  }
`;

export const BoxProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 50%;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 50px;
  }
  h2 {
    margin-bottom: 50px;
    text-align: center;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 225px;
    @media only screen and (max-width: 991px) {
      margin-bottom: 0;
    }
  }
  p {
    max-width: 300px;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const BoxContainerProjects = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1140px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Project = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
