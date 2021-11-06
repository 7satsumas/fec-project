import React from 'react';
import PropTypes from 'prop-types';
import {
  Container1, LabelArea, LargeText, InputArea, Notes, SubmitInput,
} from '../styles/Modal.style';

const AnswerForm = ({
  newAnswer,
  setNewAnswer,
  setIsAdd,
  handleAddAnswer,
}) => {
  const handleAnswerSumbit = (e) => {
    e.preventDefault();
    handleAddAnswer(newAnswer);
    setIsAdd(false);
  };

  return (
    <form>
      <Container1>
        <LabelArea htmlFor="yourAnswer">
          Your Answer
        </LabelArea>
        <LargeText
          id="yourAnswer"
          type="text"
          maxlength="1000"
          onChange={(e) => setNewAnswer({ ...newAnswer, body: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="yourNickname">
          What is your nickname
        </LabelArea>
        <InputArea
          id="yourNickname"
          type="text"
          maxlength="60"
          placeholder="Example: jack543!"
          onChange={(e) => setNewAnswer({ ...newAnswer, answerer_name: e.target.value })}
        />
        <Notes>
          For privacy reasons, do not use your full name or email address
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="yourEmail">
          Your Email
        </LabelArea>
        <InputArea
          id="yourEmail"
          type="email"
          maxlength="60"
          placeholder="Example: jack@email.com"
          onChange={(e) => setNewAnswer({ ...newAnswer, email: e.target.value })}
        />
        <Notes>
          For authentication reasons, you will not be emailed
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="photos">
          Upload your photos
        </LabelArea>
        <InputArea
          id="photos"
          type="file"
          accept="image/*"
          multiple
        />
      </Container1>
      <SubmitInput
        type="submit"
        value="Submit Answer"
        onClick={handleAnswerSumbit}
      />
    </form>
  );
};

AnswerForm.propTypes = {
  newAnswer: PropTypes.shape({}).isRequired,
  setNewAnswer: PropTypes.func.isRequired,
  setIsAdd: PropTypes.func.isRequired,
  handleAddAnswer: PropTypes.func.isRequired,
};

export default AnswerForm;