var Item = React.createClass({
    
     getInitialState: function() {
        return {data: []};
      },
      componentDidMount: function() {
          $.getJSON( "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item/"+ this.props.id+"?api_key=6e0d8785-c4b5-41f1-b694-8567d1afdb8c", function( dt ) {
          console.log(dt);
          this.setState({data:dt});
}.bind(this));
      },
      render: function() {
          var url ="/item/"+this.state.data.id +".png";
            return <div className="item">
                <img src={url}/>
                <h1>{this.state.data.name}</h1>
            <h2>{this.state.data.description}</h2></div>;
      }
});
 
React.render(<Item id={3157} />, document.body);