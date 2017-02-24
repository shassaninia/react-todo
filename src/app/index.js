// Can use import instead of require
var React = require('react');
var ReactDOM = require('react-dom');

//Create component react way
var TodoComponent = React.createClass({
    //html to return from componenet
    //This is the only required function
    render: function(){
        return (
            <div>
            
            <p>String property: {this.props.msg}</p>
            <p><strong>Chess Name: </strong>{this.props.cheese.name}</p>
            <p><strong>Smell Factor: </strong>{this.props.cheese.smellFactor}</p>
            <p><strong>Price: </strong>{this.props.cheese.price}</p>
            </div>
        );
    }
});

var myCheese = {name:'Camembert',smellFactor:'Extreme pong',price:'3.50'};

//Put component into html page
ReactDOM.render(<TodoComponent msg="Hello" cheese={myCheese}/>,document.getElementById('todo-wrapper'));