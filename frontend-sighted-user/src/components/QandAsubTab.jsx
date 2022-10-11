import { useState } from 'react'
import { Tab } from '@headlessui/react'
const Tabs = [
  {
    name: 'My Feed'
  },
  {
    name: 'My Question'
  },
  {
    name: 'Book Mark'
  },
]
const QandAsubTab = () => {
  const [selectedTab, SetSelectedTab] = useState(Tabs[0].name);
  const switchTabHandler = (name) => {
    SetSelectedTab(name)
  }
  return (
    <div className="w-full pt-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-cyan-500 p-1 bg-opacity-10">
          {Tabs.map((tab, _) => {
            return <Tab
              onClick={() => switchTabHandler(tab.name)}
              key={_}
              className={selectedTab === tab.name ?
                'bg-white  w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 '
                :
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2  hover:bg-white/[0.12] hover:text-cyan-600'}
            >
              {tab.name}
            </Tab>
          })}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
export default QandAsubTab


