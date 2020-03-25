'use strict';
const getRawBody = require('raw-body');
const routes = require('./route');

/**
 * index.handler
 * Entry point of the API
 */
exports.handler = (req, resp, context) => {
    resp.setHeader('content-type', 'application/json');
    var uri = (req.url).split('/');
    if(uri.length != 6) {
        resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ' '));
    } else {
        var route = uri[5];
        switch(req.method) {
            case "GET": 
                resp.send(JSON.stringify(routes.get(route),null, ' '));
                break;
            case "POST":
                getRawBody(req, (err, body) => {
                    resp.send(JSON.stringify(routes.post(route, body.toString(),null, ' ')));
                });
                break;
            case "PUT":
                resp.send(JSON.stringify(routes.put(route), null, ' '));
                break;
            default:
                resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ' '));
        }
    }
    
}
