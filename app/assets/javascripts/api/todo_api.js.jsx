var TodoActionCreator = require('../actions/todo_actions_creators');
var TodoAppDispatcher = require('../dispatcher/todo_dispatcher');
var authToken = ( $( "#token" ).data() ).token;
var authHeader = {'Authorization': 'Token token="'+ authToken +'"'}
var qwest = require('qwest');

function urlMaker(path) {
	return 'http://localhost:3001/api' + path;
}

var TodoApi = { 
	getTodoItems: function(){
		qwest.get(urlMaker('/lists/1/items'), null, 
			{ headers: authHeader }
		).then(function(json) {
			TodoActionCreator.todoItemsFetched(json);
		}).catch(function(error){
			console.log('getTodoItems failed', error);
		});
	},

	createTodo: function(name){
		qwest.post(urlMaker('/lists/1/items'), {item: {name: name}}, {
			headers: authHeader,
		}).then(function(new_item){
			TodoActionCreator.newTodoCreated(new_item); // ActionController action goes here
		}).catch(function(error){
			console.log('createTodo failed', error);
		});
	}
}

TodoApi.dispatchToken = TodoAppDispatcher.register(
	function(action){
		if (action.type === 'TODO_ITEM_SUBMITTED') {
			TodoApi.createTodo(action.name);
		}
	}
);

module.exports = TodoApi;