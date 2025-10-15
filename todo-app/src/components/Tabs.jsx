export function Tabs({todos}){
  const tabs=['All', 'Open', 'Completed']
    return(
      <nav className="tab-container">

        {
          tabs.map((tab,tabIndex)=>{
            const numOfTaskes=tab==='All'?
            todos.length:
            tab=== 'Open'?
            todos.filter(val=>!val.complete).length:
            todos.filter(val=>val.complete).length
            return(
              <button key={tabIndex}
              className="tab-button">
                <h4>{tab} <span>({numOfTaskes})</span></h4>
              </button>
            )
          })
        }
        
      </nav>
    )
}