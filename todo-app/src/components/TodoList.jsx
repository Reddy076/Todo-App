import { TodoCard } from "./TodoCard";

export function TodoList({ todos , selectedTabs , handleDeleteTodo , handleCompleteTodo}) {

  const tab='Open'

  const filtersTodoList = selectedTabs === 'All' ?
    todos :
    selectedTabs === 'Completed' ?
      todos.filter(val => val.complete)
      :
      todos.filter(val => !val.complete);

  
  return (
    <>

      {filtersTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard 
          key={todoIndex} 
          todoIndex={todoIndex} 
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          todo={todo} />
        );
      })}

    </>


  )
}