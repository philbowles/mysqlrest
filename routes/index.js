const express = require('express');
const fs = require('fs');
const router = express.Router();
const mysqlx = require('@mysql/xdevapi');

router.post('/', function(req, res, next) {
    mysqlx.getSession({
        user: 'phil',
        password: 'CanonD60',
        host: 'localhost',
        port: '33060'
    })
    .then(function (session) {
        console.warn(req.body)
        var db = session.getSchema('H4');
        let myTable = db.getTable('event');
        let fields=Object.keys(req.body);
        let values=[]
        fields.forEach(element => { values.push(req.body[element]) });
        console.warn(values)
        return myTable.insert(fields).values(values).execute();
    })
    .catch(function (err) { console.warn(err) });
    res.send()
});

module.exports = router;