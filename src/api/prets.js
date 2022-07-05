import axios from "axios";

const PRET_API_BASE_URL = "http://localhost:8080/api/v1/prets"

class PretService {
    async getPrets(){
        const response = await axios.get(PRET_API_BASE_URL);
        const data = await response.data;
        return data;
    }

    async createPret(pret){
        return axios.post(PRET_API_BASE_URL,pret, { headers: {'Content-Type':'application/json'}});
    }

    async deliverPret(id){
        const response = await axios.put(PRET_API_BASE_URL + '/' + id, {headers:{'Content-Type':"application/json",'Access-Control-Allow-Origin': '*'}});
        const data = await response.data;
        return data;
    }
}

export default new PretService()