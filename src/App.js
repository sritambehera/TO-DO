import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoData from './todoData';
import Todoitem from './Todoitem';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			todos: todoData
		}
		this.handleChange = this.handleChange.bind(this)
	}
  
	handleChange(id) {
		this.setState(prevState => {
			const updated = prevState.todos.map(todo => {
                if(todo.id === id){
                	todo.completed = !todo.completed
                }
                return todo;
            }
				)
			return {
				todos : updated
			}
		}
		
		)
		
	}
	render() {
    const todoItems = this.state.todos.map(items => <Todoitem 
    	key={items.id} 
    	item= {items}  
    	handleChange={this.handleChange}
    	/>)
    return (
    <div className="App">
        {todoItems}

        <img src={logo} className="App-logo" alt="logo" />
 
    </div>
  )

	}
}



export default App;
