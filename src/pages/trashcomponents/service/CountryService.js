import axios from 'axios'
// import countries from './assets/demo/data/countries.json'
export class CountryService {

    getCountries() {
        return axios.get('assets/demo/data/countries.json')
            .then(res => res.data.data);
    }
}