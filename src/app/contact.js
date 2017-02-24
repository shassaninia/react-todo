var React = require('react');
import {Link} from 'react-router';

var Contact = React.createClass({
    render:function(){
        return (
            <div>
               <Link to={'/'}>Home</Link>
                <h2>Contact Me</h2>
            </div>
        )
    }
})

module.exports = Contact;