export function TodoCard ({todo , handleDeleteTodo , todoIndex , handleCompleteTodo}){
  //const {todoIndex,input,complete} = props;
  
  console.log(todo)
  return(
    <div>
      <div className="card todo-item">
        <p>{todo.input}</p>
        <div className="todo-buttons">
          <button onClick={()=>{
            handleCompleteTodo(todoIndex)
          }} disabled={todo.complete}>
            <h6>
              Done
            </h6>
          </button>

          <button  onClick={()=>{
            handleDeleteTodo(todoIndex)
          }}>
            <h6>
              Delete
            </h6>
          </button>
        </div>
      </div>
    </div>
  )
}