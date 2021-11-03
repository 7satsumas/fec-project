import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionItem from './QuestionItem';
import Data from './dummyData';

it("should render QuestionItem component correctly", () => {
  const { getByTestId } = render(<QuestionItem question={Data.questions.results[0]}/>);
  expect(getByTestId('questionItem')).toBeInTheDocument();
});

{/* <QuestionItem question={Data.questions.results.sort(() => {
  return b.question_helpfulness - a.question_helpfulness;
})[0] */}