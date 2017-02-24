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
               <TodoItem item={item} key={index}/>
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
    }
});

//Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">
                        {this.props.item}
                    </span>
                </div>
            </li>
        );
    }
});



//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));