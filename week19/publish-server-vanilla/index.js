const http = require("http");
const fs = require("fs");
const unzipper = require("unzipper");

const server = http.createServer((req, res) => {
    // let matched = req.url.match(/filename=([^&]+)/);
    // let filename = matched && matched[1];
    // if (!filename) {
    //     return;
    // }
    // let writeStream = fs.createWriteStream("../server/public/" + filename);
    let writeStream = unzipper.Extract({ path: '../server/public/package' });
    // req.pipe(writeStream);

    req.on('data', trunk => {
        writeStream.write(trunk)
    })
    req.on('end', trunk => {
        writeStream.end(trunk)
    })
    
    req.on("end", ()=>{
        res.writeHead(200, {'Content-Type': 'text/pain'});
        res.end("okay");
    })
})

server.listen(8081)