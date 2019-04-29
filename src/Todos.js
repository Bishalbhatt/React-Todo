import React from 'react'
const Todos=({todos,deleteTodo})=>{
  const todoList= todos.length?(
      todos.map(todo=>{
          return(
              <div className="alert alert-primary col-md-8 container" key={todo.id}>
                 <span>{todo.content}</span>
                 <div className="text-right">
                    <button type="button" className="btn btn-danger text-right"  onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                 </div>
              </div>
          )
      })
  ):(
        <p className="alert alert-primary container" align="center">Nothing to display</p>
  )
    return(
        <div>
           {todoList} 
        </div>
    )
}
export default Todos