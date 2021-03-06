import styled from 'styled-components';

export const StyledStarRating = styled.fieldset`
  margin: 10px 0;
  border: none;

  legend {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-weight: bold;
  };

  input {
    display: none;
  };

  div {
    margin: 0 5px;
  };
`;

export const StyledRecommend = styled.fieldset`
  margin: 10px 0;
  border: none;

  legend {
    font-weight: bold;
  };

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  };

  div label {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  };

  input, label {
    margin: 0 10px;
    padding: 10px;
    vertical-align: baseline;
  };
`;

export const StyledName = styled.fieldset`
  margin: 10px 0;
  border: none;

  label {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-weight: bold;
  };

  input {
    margin: 5px 0;
    padding: 3px;
  };
`;

export const StyledEmail = styled.fieldset`
  margin: 10px 0;
  border: none;

  label {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-weight: bold;
  };

  input {
    margin: 5px 0;
    padding: 3px;
  };
`;

export const StyledSummary = styled.fieldset`
  margin: 10px 0;
  border: none;

  label {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-weight: bold;
  };

  input {
    margin: 5px 0;
    padding: 3px;
  };
`;

export const StyledBody = styled.fieldset`
  margin: 10px 0;
  border: none;

  label {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-weight: bold;
  };

  textarea {
    margin: 5px 0;
    padding: 3px;
    resize: none;
    overflow-y: scroll;
  };

  p {
    font-weight: normal;
  };
`;

export const StyledCharacteristics = styled.fieldset`
  margin: 10px 0;
  border: none;

  legend {
    font-weight: bold;
  };

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  };

  div label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 100%;
    text-align: center;
    align-items: center;
    margin: 10px;
  };

  input {
    margin: 10px;
  };
`;
