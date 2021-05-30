const express = require('express') , http = require('http'), path = require('path') , static = require('serve-static')
;                                                                                                                     
var app = express()
const port = 3001

app.use(express.json({limit: '50mb'}));
//app.use(express.json.urlencode({limit: '50mb', extened: true}));

app.post('/api_v1',function(req,res){                                                                                  
    res.send(req.body);
});

app.listen(port, function() {
    console.log(`Connected ${port}`);                                                                                 
});                                                                                                                  
