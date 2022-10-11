
import React from 'react'
import QandAsubTab from '../components/QandAsubTab'
import QuestionOverviewCardList from '../components/QuestionOverviewCardList'
import Search from '../components/Search'
const QandA = () => {
  return (
    <div className='flex w-11/12 flex-col'>
      <Search />
      <QandAsubTab />
      <QuestionOverviewCardList />
    </div>
  )
}

export default QandA