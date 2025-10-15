export function TodoCard ({todo}){
  //const {todoIndex,input,complete} = props;
  
  console.log(todo)
  return(
    <div>
      <div className="card todo-items">
        <p>{todo.input}</p>
        <div className="todo-button">
          <button disabled={todo.complete}>
            <h6>
              Done
            </h6>
          </button>
          <button >
            <h6>
              Done
            </h6>
          </button>
        </div>
      </div>
    </div>
  )
}