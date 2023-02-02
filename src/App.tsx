import React from 'react';
import {TodoListItem} from "./TodoListItem";

const todos: Array<Todo> = [
    {text: "walk the dog", complete: true},
    {text: "write app", complete: false}
]

const App: React.FC = () => {
    return <TodoListItem todo={todos[0]}/>;
}

// function App() {
//     return <div>Hello World</div>;
// }

export default App;
