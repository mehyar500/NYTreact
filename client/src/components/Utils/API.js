import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    getNytArticles: (query, startYear, endYear) => {
        const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        return axios.get(queryURLBase, {params: {q:query, "api-key": authKey, "begin_date": startYear, "end_date": endYear}})
                    .then(res =>{ console.log(res.data.response.docs); return res.data.response.docs;})
                    .catch(err => console.log(err));
    },
    getSavedArticles: () => {
        return axios.get("/api/saved")
                    .then(res => {console.log(res); return res})
                    .catch(err => console.log(err));
    },
    getSavedArticle: (id) => {
        return axios.get("/api/saved/" + id);
    },
    postSaveArticle: (article) => {
        return axios.post("/api/saved", article);
    },
    deleteSavedArticle: (id) => {
        return axios.delete("/api/saved/" + id);
    }
};
