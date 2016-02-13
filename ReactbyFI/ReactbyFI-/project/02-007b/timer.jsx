
var ListItem = React.createClass({

    render: function(){
        return(
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        )
    }
});



var ingredients = [{"id":1,"text":"ham"},{"id":2,"text":"cheese"},{"id":3,"text":"pork"}];

var List = React.createClass({

    render: function(){
        var listItems = ingredients.map(function(item){
            return
            <ListItem key={item.id} ingredient={item.text} />;

        });

        return(
            <ul> { listItems}</ul>
        );
    }
});



React.render(

    <List />,
    document.getElementById("example")
);

