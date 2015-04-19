var TodoActionsCreators = require('../actions/todo_actions_creators');

var TodoForm = React.createClass({
  
  getInitialState: function(){
    return {
      text: ''
    }
  },

  _createTodo: function(event) {
    event.preventDefault();

    var text = this.state.text.trim(); // Capture text from form

    if (text) {
      TodoActionsCreators.createTodo(text); // If there is text, create new action
    }

    this.setState({text: ''}) // Reset form
  },

  _onChange: function(event) {
    this.setState( { text: event.target.value } )
  },

  render: function() {
    return(
      <form>
        <input type='text' placeholder='Item name here' 
          onChange={ this._onChange } />
        <button onClick={ this._createTodo }>Submit</button>
      </form>
    )
  } 
});

module.exports = TodoForm;