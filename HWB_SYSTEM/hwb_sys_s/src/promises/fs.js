"use strict";
exports.__esModule = true;
exports.writeFile = exports.readFile = void 0;
var fs = require("fs");
function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
exports.readFile = readFile;
function writeFile(path, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, data, function (err) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
exports.writeFile = writeFile;
