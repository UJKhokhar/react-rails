var TodoList = require('./todo_list');

var TodoApp = React.createClass({
	render: function(){
		return (
			<TodoList/>
		)
	}
});

module.exports = TodoApp;