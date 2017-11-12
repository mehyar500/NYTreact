import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    get: query => {
        const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        return axios.get(queryURLBase, {params: {q:query, "api-key": authKey}});
    }
};
