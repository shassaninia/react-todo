// Can use import instead of require
var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

import {Router, Route, browserHistory,Link} from 'react-router';

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');
var Contact = require('./contact');

var App = React.createClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
                <Route path={'/contact'} component={Contact}></Route>
            </Router>
        );
    }
});
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
                <Link to={'/about'}>About</Link>
                  <Link to={'/contact'}>Contact</Link>
                <p>The busiest people have the most leisure</p>
                <ul>
                   {todos}
                </ul>
                <AddItem onAdd={this.onAdd}/>
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
    },

    onAdd:function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        })
    },

    //Lifecycle functions
    componentWillMount:function(){
        console.log('componentWillMount')
    },

    componentDidMount: function(){
        console.log('componentDidMount')
        //any grabbing of external data
    },

    componentWillUpdate:function(){
        console.log('componentWillUpdate')
    }

});


//Put component into html page
ReactDOM.render(<App/>,document.getElementById('todo-wrapper'));