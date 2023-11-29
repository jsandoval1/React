import React from 'react'

const TodoDisplay = (props) => {
    const { todos, removeTodo, toggleCompletion, isCompleteArray } = props

    // Toggle todo completion status
    const handleToggle = (idx) => {
        toggleCompletion(idx)
    }

    // Remove todo from list
    const handleRemove = (idx) => {
        removeTodo(idx)
    }

    return (
        <div>
            <fieldset>
                <legend>TodoDisplay.jsx component </legend>
                <ul>
                    {
                        // "todos" is an array. Map is taking in (toso, idx) as parameters. idx is the index of the todo in the array.
                        // key is a unique identifier for each todo. It is required by React. We are using the index of the todo in the array as the key.
                        // "todo" wouldnt work as a key because it is a string and there could be multiple todos with the same string.
                        // this isCompleteArray is used to determine if the todo should be crossed out or not.
                        todos.map((todo, idx) => {
                            return <li key={idx} style={{ textDecoration: isCompleteArray[idx] ? 'line-through' : 'none' }}>
                                {todo}
                                <input type="checkbox" onChange={() => handleToggle(idx)} checked={isCompleteArray[idx]} />
                                <button onClick={() => handleRemove(idx)}>X</button>
                            </li>
                        })
                    }
                </ul>
            </fieldset>
        </div>
    )
}

export default TodoDisplay

