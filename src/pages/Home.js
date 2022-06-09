import React, { Component } from 'react';

class Home extends Component {
	// A default state of this component with an empty list of todos.
	constructor() {
		super();
		this.state = {
			todos: [],
			item: {
				id: 0,
				todo: ''
			}
		};
	}
	/** 
	Name: 		addTodo
	Parameters: the todo item 
	Purpose: 	creates a new array that includes the user submitted todo 
				item and then updates the state with the new list.
	**/ 
	addTodo = (todo) => {
		// An array that contains the current array and the new todo item
		let new_list = [...this.state.todos, todo];

		// Updates the local state with the new array.
		this.setState({
			todos: new_list,
		});
		
	};

	/* calls addTodo function on button click */
	handleClick(item) {
		this.addTodo(item);
	}


	render() {
		const handleSubmit = event => {
			//syntax source: https://bobbyhadz.com/blog/react-clear-input-after-submit
			event.preventDefault();
			event.target.reset();
		}
		const items = this.state.todos.map((item) =>
			<li key={item.id}>{item.todo}</li>
		);
		return (
			<div className="Home">
				<h1>Todo's </h1>
				<ul>
					{items}
				</ul>
				<hr></hr> <br></br>
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Add New Item"
							onChange={(event) => this.setState({item: {
								todo: event.target.value,
								id: Math.random()
							}})}
						></input>
						<button className="button"
							onClick={this.handleClick.bind(this, this.state.item)}> 
							ADD </button>
					</form>
				</div>
			</div>
		);
	}
}

export default Home;