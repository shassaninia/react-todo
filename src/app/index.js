// Can use import instead of require
var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
// Module requires
var TodoItem = require('./todoItem');

//Create component react way
var TodoComponent = React.createClass({

    //Initialize state of TodoComponent
    //When to use state and/or properties?  Many use in tandem
    getInitialState:function()
    {
        return {
            todos:['wash up','eat some cheese', 'take a nap','buy flowers'],
         
        }
    },

    //html to return from componenet
    //This is the only required function
    render: function(){
       
       //cycle through data using javascript map function
       var todos = this.state.todos;
       todos = todos.map((item,index) => {
            return(
               <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
       });

        return (
            <div id="todo-list">
                <p>The busiest people have the most leisure</p>
                <ul>
                   {todos}
                </ul>
            </div>
        );
    },

    //Custom functions
    onDelete:function(item)
    {
        //Filter out deleted item
        var updatedTodos = this.state.todos.filter(function(val,index){
            return item !== val;
        });

        //set todos to updated value
        this.setState({
            todos:updatedTodos
        })
    }


});


//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));