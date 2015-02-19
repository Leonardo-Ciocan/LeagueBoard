var Item = React.createClass({
    
     getInitialState: function() {
        return {data: [] , showTip:false , top:false};
      },
      componentDidMount: function() {
          $.getJSON( "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item/"+ this.props.id+"?api_key=6e0d8785-c4b5-41f1-b694-8567d1afdb8c", function( dt ) {
             // dt.description = dt.description.replace(/<[^>]*>/g ," \n");

              console.log(dt.description);
                this.setState({data:dt});
}.bind(this));
          
          
      }, 
      render: function() {
          //this.state.data.description.replace("<stat>" ,"</br");
          // txt = this.state.data.description;
          //console.log(txt);
          //txt = txt.replace("<stat>" ,"</br");
          var url ="/item/"+this.state.data.id +".png";
            return <div className={"item " + (this.state.top?"topZ":"bottomZ")}>
                <img src={url} onMouseOver={this.hover} onMouseOut={this.out}/>
                <div className={this.state.showTip?"tip":"notip"}><h1>{this.state.data.name}</h1>
                <h2>{this.state.data.description}</h2></div></div>;
      }
    ,
    hover:function(){
        this.setState({top:true});
        this.setState({showTip:true}); 
    },
    out:function(){
         this.setState({showTip:false}); 
        this.setState({top:false});
    }
});
 
var Items = React.createClass({
    render: function() {
        var ids = this.props.ids;
        return (
          <div className="itemHolder">
            {ids.map(function(id) {
              return <Item id={id} />;
            })}
          </div>
        );  
  }
});

$(document).ready(function(){
    React.render(<Items ids={[3136,3135,3134,1043,1051,1056]} />, document.body);
});
