var TodoItem = require('./todo_item');

var TodoList = React.createClass({
	render: function(){
		return (
			<ul>
				<TodoItem/>
				<TodoItem/>
				<TodoItem/>
			</ul>
		)
	}
});

module.exports = TodoList;