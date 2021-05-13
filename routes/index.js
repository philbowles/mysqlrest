const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
    let fields=Object.keys(req.body);
    let values=[]
    fields.forEach(element => { values.push(req.body[element]) });
    console.log(values)
    myTable.insert(fields).values(values).execute();
    res.send()
});
module.exports = router;