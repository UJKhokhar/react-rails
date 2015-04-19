var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');

var TodoAppDispatcher = _.assign(new Dispatcher(), {
	handleAction: function(action) {
		this.dispatch(action);
	}
});

module.exports = TodoAppDispatcher;