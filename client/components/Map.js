var React = require('react');
var StyleSheet = require('react-style');
var Feed = require('./Feed');
var GoogleMap = require('google-map-react');

var Map = React.createClass({

	getInitialState: function(){
		return{
			center: [33.979471, -118.422549],
			zoom: 15,
		};
	},

	render: function(){
		return(
		<div styles={styles.gmap}>
		<GoogleMap center={this.state.center} zoom={this.state.zoom}>
		</GoogleMap>
		</div>
		);
	}
});


var styles =
StyleSheet.create({
	gmap:{
		height: '50%',
		width: '50%',
		margin: '0 auto'
	}
});

module.exports = Map;
