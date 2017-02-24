// Can use import instead of require
var React = require('react');
var ReactDOM = require('react-dom');

//Create component react way
var TodoComponent = React.createClass({
    //html to return from componenet
    //This is the only required function
    render: function(){
        return (
            <h1>hi</h1>
        );
    }
});


//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));