var RunMixin ={
    getInitialState: function () {
        return {label:"Run"}
    },

    componentWillMount: function () {
       console.log('component will mount')
    },
    click: function(e){
      var iframe = document.getElementById('iframe').src = 'http://reactjs.com'
    },
   componentDidMount: function(){
       console.log(React.findDOMNode(this))

   }
}

var Button =React.createClass({

    mixins:[RunMixin],


    render: function (){
     return  <div>

           <button onClick={this.click}>{this.state.label}   </button>
           <a onClick={this.click}>{this.state.label}   </a>

</div>

    }

})







React.render(
    <Button  />,
    //<MenuExample />,
    document.getElementById("example")

    //document.body
);