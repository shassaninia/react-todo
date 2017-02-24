// Can use import instead of require
var React = require('react');
var ReactDOM = require('react-dom');

//Create component react way
var TodoComponent = React.createClass({

    //Initialize state of TodoComponent
    //When to use state and/or properties?  Many use in tandem
    getInitialState:function()
    {
        return {
            todos:['wash up','eat some cheese', 'take a nap']
        }
    },

    //html to return from componenet
    //This is the only required function
    render: function(){
        return (
            <div id="todo-list">
                <p>The busiest people have the most leisure</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }
});



//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));