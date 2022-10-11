import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

const AnswerOverview = () => {
  return <>
    {/* User information */}
    <div className='p-2 flex items-center'><UserCircleIcon className='w-8' />Tom</div>
    {/* Answer list */}
    <div className='px-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eh desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

    {/* User information */}
    <div className='p-2 flex items-center'><UserCircleIcon className='w-8' />XXX</div>
    {/* Answer list */}
    <div className='px-2'> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eh desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  </>
}
const QuestionOverviewCard = ({ }) => {
  return (
    <div
      className='w-full border-solid border-2 p-3 border-cyan-500 mb-2 rounded-md'
    >
      {/* Question title */}
      <h1 className='text-2xl'>What is ... feels like ....?</h1>
      {/* List of topic tags */}
      <div><div className='topicTag'>Guide dog</div><div className='topicTag'>Pet</div></div>
      <AnswerOverview />
    </div>
  )
}

export default QuestionOverviewCard