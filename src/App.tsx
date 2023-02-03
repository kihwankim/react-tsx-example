import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";

const initalTodos: Array<Todo> = [
    {text: "walk the dog", complete: true},
    {text: "write app", complete: false}
]

const App: React.FC = () => {
    const [todos, setTodos] = useState(initalTodos)

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                };
            }

            return {
                ...todo
            };
        })

        setTodos(newTodos)
    }

    const addTodo: AddTodo = newTodo => {
        setTodos([
            ...todos,
            {text: newTodo, complete: false}
        ])
    }

    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>
        </React.Fragment>
    );
}

export default App;
