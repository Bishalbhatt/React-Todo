import React,{Component} from 'react'
class AddTodo extends Component{
    state={
        content: ""
    }
    handleChange=(e)=>{
        this.setState({
           content: e.target.value 
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
           <div>
               <form onSubmit={this.handleSubmit} className="container">
                  <label>Add new:</label>
                  <input type="text" className="form-control"  onChange={this.handleChange} value={this.state.content}/>
                  <button className="btn btn-primary">Submit</button>
               </form>
           </div>
        )
    }
} 
export default AddTodo