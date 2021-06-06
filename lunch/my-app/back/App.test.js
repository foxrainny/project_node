const express = require('express') , http = require('http'), path = require('path') , static = require('serve-static')
;                                                                                                                     
var app = express()
const port = 3001

//app.use('/', static(path.join(__dirname, 'html')));
const cors = require('cors');
app.use(cors());

app.use(express.json({limit: '51mb'}));
//app.use(express.json.urlencode({limit: '50mb', extened: true}));
const gps = require('./module.js');

app.post('/api_v1', function(req,res){                                                                             
    var post = req.body
    gps.gps_to_address(post);
    res.json(post);
});

app.listen(port, function() {
    console.log(`Connected ${port}`);
    
});                                                                                                                  
