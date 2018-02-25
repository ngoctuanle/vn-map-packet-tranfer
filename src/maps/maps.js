import React, {Component} from 'react';
import AmCharts from "@amcharts/amcharts3-react";
// import {MapData} from "./mapData";

class Maps extends Component {
	constructor(props){
		super(props);

		let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
		let planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

		this.state = {
			dataProvider: {
				"map": "worldHigh",
				"getAreasFromMap": true,
				"lines": [{
					"id": "line1",
					"arc": -0.85,
					"alpha": 0.0,
					"latitudes": [ -27.4731, 17.3753 ],
					"longitudes": [ 153.014, 78.4744 ]
				}],
				"images": [{
					"svgPath": targetSVG,
					"title": "South Brisbane",
					"latitude": -27.4731,
					"longitude": 153.014
				},
				{
					"svgPath": targetSVG,
					"title": "Hyderabad",
					"latitude": 17.3753,
					"longitude": 78.4744
				},
				{
					"svgPath": planeSVG,
					"positionOnLine": 0,
					"color": "#585869",
					"animateAlongLine": true,
					"lineId": "line1",
					"flipDirection": true,
					"loop": true,
					"scale": 0.03,
					"positionScale": 1.8
				}],
			}
		};

		this.mapStyle = {
			width: "100%",
			height: "700px"
		};
	}

	render(){
		return (
			<AmCharts.React
				style={this.mapStyle}
				options={{
					"type": "map",
					"theme": "light",
					"dataProvider": this.state.dataProvider,
					"imagesSettings": {
						"color": "#585869",
						"rollOverColor": "#585869",
						"selectedColor": "#585869",
						"pauseDuration": 0.2,
						"animationDuration": 2.5,
						"adjustAnimationSpeed": true
					},
				}} />
		);
	}
}

export default Maps;