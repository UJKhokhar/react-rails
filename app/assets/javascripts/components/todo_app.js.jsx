var TodoList = require('./todo_list');
var TodoForm = require('./todo_form');

var TodoApp = React.createClass({
	render: function(){
		return (
      <div className="todo-wrapper">
			  <TodoList/>
        <TodoForm/>
      </div>
		)
	}
});

module.exports = TodoApp;