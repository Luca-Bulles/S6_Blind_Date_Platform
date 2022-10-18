import React from 'react'
import AnswerItem from './AnswerItem'

const AnswerList = () => {
  return (
    <>
      <h1 className='w-full text-xl font-mono pt-2'>Answers</h1>
      <div className='w-full mt-2 border-2 rounded-md p-2 border-cyan-500'>
        {/* Answers */}
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
      </div>

    </>

  )
}

export default AnswerList