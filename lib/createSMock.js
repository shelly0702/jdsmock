const fs = require('fs');
const path = require('path');
const readline = require('readline');
let pathUrl = path.join(path.resolve(), 'SMock.json');

let text = {
    host: "",
    hostname: "",
    projectName: "",
    mockPort: 3000,
    headers: {
        host: ""
    }
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let getHost = () => {
    let promise = new Promise((resolve, reject) => {
        rl.question('所谓host:', (answer) => {
            text.host = (answer === "") ? text.host : answer;
            resolve();
        });
    });
    return promise;
}
let hostname = () => {
    let promise = new Promise((resolve, reject) => {
        rl.question('hostName:', (answer) => {
            text.hostname = (answer === "") ? text.hostname : answer;
            resolve();
        });
    });
    return promise;
}
let projectName = () => {
    let promise = new Promise((resolve, reject) => {
        rl.question('projectName:', (answer) => {
            text.projectName = (answer === "") ? text.projectName : answer;
            resolve();
        });
    });
    return promise;
}
let port = () => {
    let promise = new Promise((resolve, reject) => {
        rl.question('port：', (answer) => {
            text.port = (answer === "") ? text.port : answer;
            resolve();
        });
    });
    return promise;
}
let create = () => {
    fs.writeFile(pathUrl, JSON.stringify(text, null, '\t'), err => {
        if (err) return console.error(err);
        console.log('启动超级变换形态~');
        console.log(text);
        rl.close();
    })
}
let generateParameters = () => {
    getHost().then(() => {
        return hostname();
    }).then(() => {
        return projectName();
    }).then(() => {
        return port();
    }).then(() => {
        return create();
    })
}
generateParameters();