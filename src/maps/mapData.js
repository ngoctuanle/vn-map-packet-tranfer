import { map, timeout, retry, subscribe, get } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

export class MapData {
	static IP_API = 'http://ip-api.com/json';

	static getGeoData(ipAddr, callback){
		try {
			const url = `${MapData.IP_API}/${String(ipAddr)}`;
			ajax.get(url)
				.timeout(5000)
				.retry(3)
				.map(data => data.response)
				.subscribe((data) => {
					if(!data)
						return callback(null);
					return callback(data);
				}, (err) => {
					console.error(err);
					return callback(null);
				});
		} catch (error){
			console.error(error);
			return callback(null);
		}
	}
}