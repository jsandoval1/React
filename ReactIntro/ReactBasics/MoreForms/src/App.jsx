import './App.css'
import UserForm from './components/UserForm'

function App() {

  return (
    <>
      <div className="App">
        {/* For this example, we'll only be using the UserForm component, it has the JSON stringify to display the state */}
        <h1>More Forms</h1>
        <fieldset>
          <legend>UserForm Component</legend>
          <UserForm />
        </fieldset>
      </div>
    </>
  )
}

export default App
