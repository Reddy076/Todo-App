import { TodoCard } from "./TodoCard";

export function TodoList({ todos }) {

  const tab='Open'

  const filtersTodoList = tab === 'All' ?
    todos :
    tab === 'Completed' ?
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
          todo={todo} />
        );
      })}

    </>


  )
}