var TodoActionCreator = require('../actions/todo_actions_creators')

var getTodoItems = function(){
	fetch('http://localhost:3001/api/lists/1/items', 
		{ headers: 
			{'Authorization': 'Token token="umartoken"'} 
		}
	).then(function(response) {
		return response.json()
	}).then(function(json) {
		TodoActionCreator.todoItemsFetched(json);
	}).catch(function(error){
		console.log('getTodoItems failed', error);
	});
}

module.exports = getTodoItems