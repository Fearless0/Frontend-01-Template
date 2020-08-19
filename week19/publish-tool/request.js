
var http = require("http")
// var querystring = require("querystring")
var fs = require("fs")
// const postData = querystring.stringify({
//     'msg': '你好世界'
//   });
var archiver = require('archiver');
  // const filename = "./bg.jpg";
  const filename = "./package";
  // let readStream = fs.createReadStream("./" + filename);
  
  
//   const req = http.request(options, (res) => {
//     console.log(`状态码: ${res.statusCode}`);
//     console.log(`响应头: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//       console.log(`响应主体: ${chunk}`);
//     });
//     res.on('end', () => {
//       console.log('响应中已无数据');
//     });
//   });
  
//   req.on('error', (e) => {
//     console.error(`请求遇到问题: ${e.message}`);
//   });
  

// fs.stat(filename, (error, stat) => {
    const options = {
        hostname: 'localhost',
        port: 8081,
        path: '/?filename=' +'package.zip',
        method: 'POST',
        headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/octet-stream',
        }
      };

    const req = http.request(options, (res) => {
        console.log(`状态码: ${res.statusCode}`);
        console.log(`响应头: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`响应主体: ${chunk}`);
        });
        res.on('end', () => {
            console.log('响应中已无数据');
        });
    });
      
    var archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });
    archive.directory(filename, false);
    archive.pipe(req);
    archive.on('end', function() {
      console.log('Data has been drained');
    });
    archive.finalize();
//     req.on('error', (e) => {
//     console.error(`请求遇到问题: ${e.message}`);
//     });
      
//     let readStream = fs.createReadStream("./" + filename);

//     readStream.pipe(req);
//     readStream.on('end', ()=>{
//         req.end();
//     })
// })



  // 将数据写入请求主体。
//   req.write(postData);
//   req.write(readStream);
