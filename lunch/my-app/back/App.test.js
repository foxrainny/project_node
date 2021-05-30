const express = require('express') , http = require('http'), path = require('path') , static = require('serve-static')
;                                                                                                                     
var app = express()
const port = 3001

app.get('/api_v1',function(req,res){                                                                                  
    res.send('api_v1');
});

app.listen(port, function() {
    console.log(`Connected ${port}`);                                                                                 
});                                                                                                                  
