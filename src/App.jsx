import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
   const todoItems=[{
    name : "Buy Milk",
    dueDate :"28/02/2024",
   },
   {
    name : "Go to college",
    dueDate :"28/02/2024",
  }]

  return (
  <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
  );
}

export default App;
