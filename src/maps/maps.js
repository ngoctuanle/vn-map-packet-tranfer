import React, {Component} from 'react';
import AmCharts from "@amcharts/amcharts3-react";

class Maps extends Component {
	render(){
		return (
			<AmCharts.React
				style={{
					width: "100%",
					height: "700px"
				}}
				options={{
					"type": "map",
					"theme": "light",
					"dataProvider": {
						"map": "worldHigh",
						"getAreasFromMap": true
					}
				}} />
		);
	}
}

export default Maps;