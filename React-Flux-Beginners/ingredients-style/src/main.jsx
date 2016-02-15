var React = require('react');
var ReactDOM = require('react-dom');
var ListManager  = require('./components/ListManager.jsx');



ReactDOM.render(
    <ListManager title="ingredients" />,
    document.getElementById('ingredients')
);

ReactDOM.render(
    <ListManager title="ToDo" />,
    document.getElementById('Todo')
);
ReactDOM.render(
    <ListManager title="Chrismas"  headingColor="#b31217" />,
    document.getElementById('Christmas')
);
