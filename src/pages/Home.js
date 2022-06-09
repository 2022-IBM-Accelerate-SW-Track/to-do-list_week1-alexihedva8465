import React, { Component } from 'react';

class Home extends Component {
	// A default state of this component with an empty list of todos.
	constructor() {
		super();
		this.state = {
			todos: [],
			item: ''
		};
	}
	/** 
	Name: 		addTodo
	Parameters: the todo item 
	Purpose: 	creates a new array that includes the user submitted todo 
				item and then updates the state with the new list.
	**/ 
	addTodo = (todo) => {
		console.log(todo);
		todo.id = Math.random();

		// An array that contains the current array and the new todo item
		let new_list = [...this.state.todos, todo];
		console.log("new list");
		console.log(new_list);

		// Updates the local state with the new array.
		this.setState({
			todos: new_list,
		});
		console.log("in state: ");
		console.log(this.state.todos);
		console.log("ID");
		console.log(todo.id);
	};

	/* calls addTodo function on button click */
	handleClick(item) {
		this.addTodo(item);
	}


	render() {
		const items = this.state.todos.map((item) =>
			<li key={item.id}>{item}</li>
		);
		return (
			<div className="Home">
				<h1>Todo's </h1>
				<ul>
					{items}
				</ul>
				<div>
					<input
						type="text"
						placeholder="Add New Item"
						onChange={(event) => this.setState({ item: event.target.value })}
					></input>
					<button className="button"
						onClick={this.handleClick.bind(this, this.state.item)}> ADD </button>
				</div>
			</div>
		);
	}
}

export default Home;