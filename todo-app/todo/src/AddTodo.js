import React, {Component} from 'react';
  class AddTodo extends Component{
      state = {
          content:"",
      }
      handleChange =(e)=>{
          this.setState({
              content:e.target.value,
          })
      }
      handleSubmit = (e)=>{
          e.preventDefault();
          this.props.addTodo(this.state);

          this.setState({
              content:'',
          })
          
      }

    
      render(){
          return(
            <form className="col s12" onSubmit={this.handleSubmit}>
                <label>Add New Todo</label>
                  <input placeholder="Placeholder" onChange={this.handleChange}  id="first_name" type="text" value={this.state.content} className="validate" />
                  <a className="waves-effect waves-light btn">Submit</a>
                 
            </form>
          )
      }
  }
  export default AddTodo;