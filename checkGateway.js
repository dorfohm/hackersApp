const network = require('network');

const express = require('express');
const app = express();

app.get('/network', (req, res) => {
  network.get_gateway_ip(function(err, ip) {
    return res.send(err || ip) 
  })   

});

app.listen(3001, () => { console.log('listening on 3001') });
  