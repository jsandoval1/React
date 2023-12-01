import './App.css'
import MainBody from './components/MainBody'
import MyContext from './context/context'
import { useReducer } from 'react'

function App() {
  // Settomg up iniiial state for form
  const initialState = {
    firstName: {
      value: '',
      error: ''
    },
    lastName: {
      value: '',
      error: ''
    },
  }

  // Setting up reducer funciton
  function reducer(state, action) {
    return {
      ...state,
      [action.type]: action.payload
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // Handle change function
  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: value
    });
  }

  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className="App">
      <MyContext.Provider value={{ state, dispatch, handleChange, handleSubmit }}>
        <h1> Context and Reducer </h1>

        <MainBody />

      </MyContext.Provider>
    </div>
  )
}

export default App
