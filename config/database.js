// const db_endpoint = "mongodb://192.168.0.79:27017/n2sky";
const config = require('./../HOST.json');

module.exports = {

    'secret': 'testsecret',
    'database': config.db_host,
    'options': {
        useMongoClient: true,
        db: {native_parser: true},
        server: {poolSize: 5},
        user: 'n2sky',
        pass: 'password'}

};
