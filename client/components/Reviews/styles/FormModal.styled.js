import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgb(255, 255, 255);
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template: 5% 90% 5% / 5% 90% 5%;
  width: 60%;
  height: 90%;
  overflow-y:auto;
  background-color: rgb(240, 240, 240);

  h2, h3 {
    margin: 20px 0;
  }

  button {
    grid-area: 1 / 3 / 2 / 4;
    place-self: start end;
    padding: 10px;
    border: none;
    font-size: larger;
  };

  div {
    grid-area: 2 / 2 / 3 / 3;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    place-self: center;
  };
`;
