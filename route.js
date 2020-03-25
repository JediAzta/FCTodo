'use strict';
/**
 * API Routing 
 */
const todo = require('./todo');

/**
 * get(route)
 * Handling GET Request
 * 
 * route: String - the name of GET request route
 * 
 * return status code and body (if any)
 */
exports.get = (route) => {
    switch(route){
        case "list":
            return {'code': 200, 'body': todo.getAll()};
        case "count":
            return {'code': 200, 'body': todo.count()}
        default:
            return {'code': 400, 'body': 'Bad Request'};
    }
}

/**
 * post(route, body)
 * Handling POST Request (Create)
 * 
 * route: String - the name of GET request route
 * body: String - String in valid JSON format
 * 
 * return status code and body (if any)
 */
exports.post = (route, body) => {
    switch(route){
        case "add":             
            return todo.add(body);
            break;
        case "clear":
            return todo.clear();
        default:
            return {'code': 400, 'body': 'Bad Request'};
    }
}

/**
 * put(route)
 * Handling PUT Request (Update)
 * 
 * route: String - the name of GET request route
 * body: String - String in valid JSON format
 * 
 * return status code and body (if any)
 */
exports.put = (route) => {
    switch(route){
        case "remove":
            return todo.remove();
        default:
            return {'code': 400, 'body': 'Bad Request'};
    }
}