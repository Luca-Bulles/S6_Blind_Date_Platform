import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import AnswerList from '../../components/QandA/AnswerList';
import QuestionDetailItem from '../../components/QandA/QuestionDetailItem';
const data = {
  name: 'What is ........ feels like...?',
  tag: ['Guide dog', 'Pet'],
  user: 'xxxxx',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text eh desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  answers: [
    {},
    {}
  ],
};
const QuestionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState({});
  const [answers, setAnswer] = useState([]);
  useEffect(() => {
    //TODO: Fetch question data here...
    //Now is fake data here
    setQuestion(data);
    setAnswer(data.answers);
  }, [id]);
  return (
    <div className='flex w-11/12 flex-col items-center'>
      {/* Subnav */}
      <div className='w-full items-start'><button className='btn' onClick={() => navigate(-1)}>Return</button></div>
      {/* Question */}
      <QuestionDetailItem question={question} />
      {/* Answer list  */}
      <AnswerList answers={answers} />
    </div>
  )
}

export default QuestionDetailPage

