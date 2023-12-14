import React, { useState } from 'react'

const TodoForm = (props) => {
    // Destructure the addTodo function from props
    const { addTodo } = props

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value
        addTodo(todo)
        e.target.todo.value = ''
    }

    return (
        <fieldset>
            <legend>TodoForm.jsx component </legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo:</label>
                <input type="text" name="todo" id="todo" required />
                <button>Add Todo</button>
            </form>
        </fieldset>
    )
}

export default TodoForm