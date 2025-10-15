import { useState , useEffect} from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },

  // ]

  const [todos, setTodos]= useState([]);

  const [selectTabs, setSelectTabs]= useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos,{input: newTodo,complete: false}]
    setTodos(newTodoList)
    handleLocalStorage(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo=todos[index]
    completedTodo['complete']=true
    newTodoList[index]=completedTodo
    setTodos(newTodoList)
    handleLocalStorage(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index})
      setTodos(newTodoList)
      handleLocalStorage(newTodoList)
  }

  function handleLocalStorage( currTodos) {
    localStorage.setItem('todos-app',JSON.stringify({todos:currTodos}))
  }

  useEffect(()=>{
    if(!localStorage.getItem('todos-app')){return}
    let db = JSON.parse(localStorage.getItem('todos-app'))
    setTodos(db.todos)
  },[] )




  return (

    <>
      <Header todos={todos} />
      <Tabs selectTabs={selectTabs} setSelectTabs={setSelectTabs} todos={todos} />
      <TodoList todos={todos}  selectTabs={selectTabs}  handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo} />
    </>


  )
}

export default App