import './App.css'
import UserForm from './components/UserForm'

function App() {

  return (
    <>
      <div className="App">
        {/* For this example, we'll only be using the UserForm component, it has the JSON stringify to display the state */}
        <UserForm />
      </div>
    </>
  )
}

export default App
