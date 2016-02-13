var Content = React.createClass({

    render: function() {
        return <div>
            {this.props.children}


            {
/*
                property: <h1> React.js</h1>
*/
            }
            <p>Rocks</p>
            <p>Really</p>
               </div>
    }
})

React.render(
    <Content>
    </Content>,
    document.getElementById('example')
);