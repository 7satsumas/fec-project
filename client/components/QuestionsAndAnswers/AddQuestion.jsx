import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuestionModal from './modal/QuestionModal';
import Button from './styles/SharedQA.style';

const AddQuestion = ({ handleAddQuestion }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        data-testid="addQuestion"
        onClick={() => setOpen(true)}
      >
        ADD A QUESTION +
      </Button>
      {open && (<QuestionModal setOpen={setOpen} handleAddQuestion={handleAddQuestion} />)}
    </div>
  );
};

AddQuestion.propTypes = {
  handleAddQuestion: PropTypes.func.isRequired,
};

export default AddQuestion;
