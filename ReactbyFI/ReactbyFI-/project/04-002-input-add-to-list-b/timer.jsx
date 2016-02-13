
var ListItem = React.createClass({

    render: function(){
        return(
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        );
    }
});


{/*
var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];
*/
}
var ingredients = [];


var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});



var Content = React.createClass({
    getInitialState: function(){
        return {ingredients:[], ID: 0,value: ''}
    },
    _handleKeyPress: function(e) {
        if (e.key === 'Enter') {
        console.log(e.target.value)
        console.log(React.findDOMNode(this.refs.textbox).value)
        this.setState({ID:++this.state.ID , value: e.target.value})
            ingredients.push({"id":this.state.ID , "text":e.target.value})


    }
    },
    render: function() {


        return <div>
            <input type="text" onKeyPress={this._handleKeyPress} placeholder="Hello!" ref="textbox" />
            ID:<span>{this.state.ID}</span>Value:<span>{this.state.value}</span>
            <List />
        </div>
    }
})

React.render(
    <Content></Content>,
    document.getElementById('example')
);