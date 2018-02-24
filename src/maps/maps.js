import React, {Component} from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import {MapData} from "./mapData";

class Maps extends Component {
	constructor(props){
		super(props);
		this.state = {
			dataProvider: {
				"map": "worldHigh",
				"getAreasFromMap": true,
				"lines": [],
				"images": [],
				"imagesSettings": {
					"color": "#585869",
					"rollOverColor": "#585869",
					"selectedColor": "#585869",
					"pauseDuration": 0.2,
					"animationDuration": 2.5,
					"adjustAnimationSpeed": true
				},
				"linesSettings": {
					"color": "#585869",
					"alpha": 0.4
				},
			}
		};

		this.mapStyle = {
			width: "100%",
			height: "700px"
		};

		MapData.getGeoData('103.134.253.10',(data) => {
			console.log(data);
		});
	}

	render(){
		return (
			<AmCharts.React
				style={this.mapStyle}
				options={{
					"type": "map",
					"theme": "light",
					"dataProvider": this.state.dataProvider
				}} />
		);
	}
}

export default Maps;