module.exports = server => {
    return {
        // show: require('./show')(server),
        list: require('./list')(server),
        create: require('./create')(server),
        remove: require('./remove')(server),
        update: require('./update')(server),
        /*appendCar: require('./appendCar')(server),
        pullCar: require('./pullCar')(server)*/
    };
};