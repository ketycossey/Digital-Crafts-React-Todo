import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      val : '',
      tasks: []
    }
  }

handleChange(input){
    this.setState({ val : input})
}


handleSubmit(e){
    e.preventDefault()
    let updatedToDoItems = [...this.state.tasks]
    updatedToDoItems.push({task : this.state.val, isCompleted: false})
    this.setState({ val: "", tasks : updatedToDoItems})
}

toggleCompletion(task){
  let indx = this.state.tasks.indexOf(task)
  let newTaskState = [...this.state.tasks]
  newTaskState[indx].isCompleted = !newTaskState[indx].isCompleted 
  this.setState({items: newTaskState})
}

  render() {
    return (
      <div>
         <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.state.val} onChange={(e) => this.handleChange(e.target.value)}></input>
          <button type="submit">Add</button>
        </form>
        <h3>To Do List</h3>
        <ul>{
          this.state.tasks.filter(item => item.isCompleted === false).map((item,i) => <li key={i}>{item.task}<button onClick={() => this.toggleCompletion(item)}>Mark as Done</button></li>)
        }</ul>
        <h3>Completed</h3>
        <ul>{
          this.state.tasks.filter(item => item.isCompleted === true).map((item,i) => <li key={i}>{item.task}<button onClick={() => this.toggleCompletion(item)}>Restore</button></li>)
        }</ul>
      </div>
    );
  }
}

export default App;
