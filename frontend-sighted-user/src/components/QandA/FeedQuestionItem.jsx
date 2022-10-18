import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const AnswerOverview = () => {
  return <>
    {/* User information */}
    <div className='p-2 flex items-center'><UserCircleIcon className='w-8' />Tom</div>
    {/* Answer list */}
    <div className='px-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eh desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  </>
}

const FeedQuestionItem = ({ id = 'test', title, topics = [], answers = [] }) => {
  return (
    <Link to={`/question/${id}`}>
      <div
        className='w-full border-solid border-2 p-3 border-cyan-500 mb-2 rounded-md'
      >
        {/* Question title */}
        <h1 className='text-2xl'>{title} (need update data)</h1>
        {/* List of topic tags */}
        <div>
          {topics.map((topic, _) => {
            return <div key={_} className='topicTag'>{topic}</div>
          })}
        </div>
        <AnswerOverview />
      </div>
    </Link>
  )
}

export default FeedQuestionItem