export function Header({todos}){
  //const {todos} = props;
  const todosLength=todos.length;
  const isTaskPural=todosLength != 1;
  const taskOrTasks=isTaskPural ? 'tasks' : 'task';

  return (
    <header>
      <h1 className ="text-gradient">You have {todosLength} open {
        taskOrTasks
        }.</h1>
    </header>
  )
}