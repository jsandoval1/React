import './App.css'
import { useState } from 'react'
import TabButtons from './components/TabButtons'
import TabContent from './components/TabContent'

function App() {

  // 1.) State of the currently selected tab in TabButtons.jsx component is what determines what is rendered in the TabContent.jsx component. ✅
  // 2.) The state of the currently selected tab in TabButtons.jsx component is managed by the App.jsx component. ✅
  const [selectedTab, setSelectedTab] = useState(1)

  // function to update the state of the currently selected tab in TabButtons.jsx component, which is passed to the TabButtons.jsx component as a prop
  const updateSelectedTab = (tab) => {
    setSelectedTab(tab)
    console.log('App.jsx: State changed to: ', tab)
  }

  return (
    <>
      <div className="App">
        <h1> Tabs </h1>
        {/* 3.) The state of the currently selected tab in TabButtons.jsx component is passed to the TabButtons.jsx component as a prop. ✅ */}
        <TabButtons updateSelectedTab={updateSelectedTab} />

        <h6>⬆️State of the currently selected tab in TabButtons.jsx component is: {selectedTab} ⬆️</h6>
        <h6>⚙️State is managed by App.jsx component.⚙️</h6>
        <h6>⬇️TabContent.jsx component renders the content of the currently selected tab.⬇️</h6>

        {/* 4.) TabContent.jsx component is passed the state of the currently selected tab in TabButtons.jsx component as a prop. ✅ */}
        {/* 5.) TabContent.jsx component renders the content of the currently selected tab. ✅ */}
        <TabContent selectedTab={selectedTab} />
      </div>
    </>
  )
}

export default App
