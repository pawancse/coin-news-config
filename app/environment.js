exports.setEnvironmentVariable = function(){
    var fs = require('fs');
    var fileName = 'environment.json';
    var envFile = fs.readFileSync(fileName);
    var data = JSON.parse(envFile);
    Object.keys(data).forEach(function(key, index){
        process.env[key] = data[Object.keys(data)[index]]
    })
};