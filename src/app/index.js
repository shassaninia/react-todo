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

//Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">
                        {this.props.item}
                    </span>
                    <span onClick={this.handleDelete} className="item-delete"> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete:function(){
        //onDelete is a function from the parent that gets passed down
        //as a property into the function defined on the item.
        this.props.onDelete(this.props.item);
    }
});



//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));