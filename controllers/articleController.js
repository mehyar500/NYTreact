const article = require("../models/savedArticles.js");

//methods to connect to mongo db
module.exports  = {
    findAll: function(req, res) {
        article
        .find(console.log(res))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        article
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("Running create");
        article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => { console.log(err); res.status(422).json(err); });
    },
    update: function(req, res) {
        article
        .findOneAndUpdate({ _id: req.params.id }, dbModel)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));;
    },
    remove: function(req, res) {
        article
        .findById({ _id: req.params.id })
        .then(function(dbModel) { dbModel.remove();})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};

