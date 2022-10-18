
import React, { createContext, useEffect, useState } from 'react'
import QuestionService from '../services/QuestionService'
export const QandAContext = createContext()


export const Tabs = [
  'My Feed',
  'My Question',
  'Book Mark'
]


const QandAContextProvider = (props) => {
  const [selectedTab, SetSelectedTab] = useState(Tabs[0]);
  const [myFeedQuestions, SetMyFeedQuestions] = useState([]);
  //Switch Content Filter
  const SwitchTabsTo = (tabName) => {
    switch (tabName) {
      case Tabs[0]: SetSelectedTab(Tabs[0]); break;
      case Tabs[1]: SetSelectedTab(Tabs[1]); break;
      case Tabs[2]: SetSelectedTab(Tabs[2]); break;
      default: SetSelectedTab(Tabs[0]);
    }
  }


  return <QandAContext.Provider value={{ myFeedQuestions, selectedTab, SwitchTabsTo }}>
    {props.children}
  </QandAContext.Provider>
}



export default QandAContextProvider;