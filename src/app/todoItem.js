var React = require('react');
require('./css/TodoItem.css');

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

module.exports = TodoItem;