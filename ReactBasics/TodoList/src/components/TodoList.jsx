import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ToDoForm from './TodoForm'
import TodoDisplay from './TodoDisplay'

const TodoList = () => {
    // Create a list of todos that added to in the form and rendered in the list
    // Create a list of completion statuses that is updated when a todo is toggled
    const [todos, setTodos] = useState([])
    const [isCompleteArray, setIsCompleteArray] = useState([])

    //  [todos] is the dependency array. If the value of todos changes, new isCompleteArray is created.
    useEffect(() => {
        setIsCompleteArray(Array(todos.length).fill(false))
    }, [todos])

    // Function that will be passed to the form to add a new todo to the list
    const addTodo = (todo) => {
        setTodos([...todos, todo])
        console.log('Adding todo: ', todo)
    }

    // Function that will be passed to the list to toggle a todo's completion status
    const toggleCompletion = (idx) => { // takes an idx parameter
        const newIsCompleteArray = [...isCompleteArray] // create a copy of the isCompleteArray named "newIsCompleteArray"
        newIsCompleteArray[idx] = !newIsCompleteArray[idx] // toggle the value at the idx in the newIsCompleteArray
        setIsCompleteArray(newIsCompleteArray) // set the isCompleteArray to the newIsCompleteArray
        console.log('Toggling completion status of todo: ', `${todos[idx]}`)
    }

    // Function that will be passed to the list to remove a todo from the list
    const removeTodo = (idx) => {
        const newTodos = [...todos]
        newTodos.splice(idx, 1) // what is the 1 for? - remove 1 element at the idx
        setTodos(newTodos)
        console.log('Removing todo: ', `${todos[idx]}`)
    }

    return (
        <>
            < ToDoForm addTodo={addTodo} />
            <br />
            <TodoDisplay todos={todos} removeTodo={removeTodo} toggleCompletion={toggleCompletion} isCompleteArray={isCompleteArray} />
        </>
    )
}

export default TodoList