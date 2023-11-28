import { useState } from 'react'
import './App.css'
import TabButtons from './components/TabButtons'
import TabContent from './components/TabContent'

function App() {
  // Initialize 'selectedTab' with an initial value of 0, this makes the first tab default to being activated (index 0)
  const [selectedTab, setSelectedTab] = useState(0)

  // Function 'handleTabClick'
  const handleTabClick = (index) => {
    setSelectedTab(index) // Set the 'selectedTab' state to the 'index' argument
  }

  // Creating an array named 'tabsData' containing objects with tab information
  const Tabs = [
    {
      label: 'Tab 1',
      content: 'Content for Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'Content for Tab 2',
    },
    {
      label: 'Tab 3',
      content: 'Content for Tab 3',
    }
  ]

  return (
    <>
      <div className="App">
        <h1> Tabs </h1>
        <TabButtons tabButtons={Tabs} handleTabClick={handleTabClick} />
        <TabContent tabContent={Tabs} selectedTab={selectedTab} />
      </div>
    </>
  )
}

export default App
