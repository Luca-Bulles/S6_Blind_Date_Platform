import React from 'react'
import QuestionOverviewCard from './QuestionOverviewCard'

const QuestionOverviewCardList = () => {
  return (
    <>
      <h1 className='text-3xl font-mono py-2'>Popular questions</h1>
      <div className='w-full flex flex-col h-[70vh]  overflow-auto'>
        <QuestionOverviewCard />
        <QuestionOverviewCard />
        {/* <QuestionOverviewCard /> */}
      </div>
    </>

  )
}

export default QuestionOverviewCardList