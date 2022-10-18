import React from 'react'
import { UserCircleIcon, PencilSquareIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

const QuestionDetailItem = ({ question }) => {
  return (
    <div className='mt-2 w-full p-2 border-2 border-cyan-500 rounded-md'>
      {/* question header*/}
      <div className='flex justify-between items-stretch'>
        {/* question title */}
        <div>
          <h1 className='text-2xl font-mono'>{question.name}</h1>
          <span className='topicTag'>Tag -1 </span>
          <span className='topicTag'>Tag -2 </span>
          <div><UserCircleIcon className='w-8 inline' /> xxxx </div>
        </div>
        {/* menue for question */}
        <div className='w-30'>
          <div className='hidden md:inline pr-2'><PencilSquareIcon className='w-6 inline' />Answer</div>
          <div className='hidden md:inline pr-2'><ExclamationTriangleIcon className='w-6 inline' />Report</div>
        </div>
      </div>
      <div>{question.description}</div>
    </div>
  )
}

export default QuestionDetailItem