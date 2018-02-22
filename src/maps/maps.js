import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class Maps extends Component {
	render(){
		return (
			<Map google={this.props.google} zoom={10}></Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCpsVf_SsnelR9vEK0gAaUZeNXumdFLWKE'
})(Maps)