module.exports = server => {
    return {
        // show: require('./show')(server),
        list: require('./list')(server),
        create: require('./create')(server),
        update: require('./update')(server),
        delete: require('./delete')(server)
        /*appendCar: require('./appendCar')(server),
        pullCar: require('./pullCar')(server)*/
    };
};