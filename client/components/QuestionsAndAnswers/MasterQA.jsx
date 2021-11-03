import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import AddQuestion from './AddQuestion';
import MoreQuestions from './MoreQuestions';
import QuestionList from './QuestionList';
import SearchQuestion from './SearchQuestion';
import Data from './dummyData';

// component
const MasterQA = () => {
  const [questions, setQuestions] = useState(sortedQuestions);
  return (
    <div data-testid='masterQA'>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestion />
      <QuestionList questions={questions} />
      <Btn>
        <MoreQuestions />
        <AddQuestion />
      </Btn>
    </div>
  );
};

const initialData = Data.questions.results;
const sortedQuestions = initialData.sort(compareFn)
const compareFn = (a, b) => {
  return b.question_helpfulness - a.question_helpfulness;
}

// style
const Btn = styled.div`
  display: flex;
`;
export default MasterQA;
