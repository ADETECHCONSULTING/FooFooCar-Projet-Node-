const Orm = require('orm');

module.exports = server => {
    Orm.connect(server.settings.db_uri, (err, db) => {
        let Car = db.define("car", {
            model : {
                type: String,
                required : true,
                defaultValue: "BMW"
            },
            color:{
                type: String,
                required:true,
                defaultValue: "White"
            },
            seats: {
                type: Number,
                required: true,
                defaultValue: 2
            },
            owner: {
                type: Orm.Typs
            }

        });
    });
};