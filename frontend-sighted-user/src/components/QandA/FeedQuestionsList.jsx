import React from 'react'
import FeedQuestionItem from './FeedQuestionItem'

// TODO fetch list of data here
const FeedQuestionsList = () => {
  return (
    <>
      <h1 className='text-3xl font-mono py-2'>Popular questions</h1>
      <div className='w-full flex flex-col'>
        <FeedQuestionItem />
      </div>
    </>

  )
}

export default FeedQuestionsList