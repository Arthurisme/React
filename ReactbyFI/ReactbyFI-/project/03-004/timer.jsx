

var Button =React.createClass({



    getDefaultProps:function(){
        return {buttonLabel: "lorem ipsum"}
    },







    render: function (){

        return  (
            <button> {this.props.buttonLabel}</button>

        );

    }

})





var Content =React.createClass({

    render: function (){

        return (

            <div>
                <Button />
                <Button buttonLabel="2"  />
                <Button buttonLabel="3"  />
            </div>

        );


    }

})




React.render(

<Content />,

    document.getElementById("example")
);

