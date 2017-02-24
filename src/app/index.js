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
                <li key={index}>{item}</li>
            )
       });

        return (
            <div id="todo-list">
                <p>The busiest people have the most leisure</p>
                <p>{this.state.age}</p>
                <ul>
                   {todos}
                </ul>
            </div>
        );
    }
});



//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));