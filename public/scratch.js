var http = require("http");

http.createServer(function(req, res) {
  res.writeHeader(200, {'Content-Type'='text/plain'});
  res.end('Lorem Ipsum');
};

function clickThis() {
  if(typeof(Storage) == "undefined")
    if(localStorage.count) {
      localStorage.count += 1;
    }
    else {
          localStorage.count = 1
    }
  else {
    document.getElementById("demo").innerHTML = "Lorem Ipsum"
  }
}

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange(function(){
  if(this.readystate == 4 & this.status ==200 )

})

http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, 'Content-Type'='txt/html');
  res.end('hey');
}).listen(8080);

url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, 'Conten-Type':'text/html');
  res.write(req.url);
  res.end();

  http = require('http');
  url = require('url');
  fs = require('fs');

  http.createServer(function(req, res) {
    fs.readFile('something.html', function(err, data) {
        res.writeHead(200, 'Content-Type':'text/html');
        res.write(req.url);
        res.end();
    })
  })
}).listen(8080);

http = require('http');
url = require('url');
fs = require('fs');

http.createServer(function(req, req) {
  fs.readFile('something.html', function(err, data) {
    res.writeHead(200, 'Content-Type':'text/html');
    res.write(req.url + data);
    res.end();
  })
}).listen(8080);

const express = require('express');
const app = express();

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('file.html', function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(req.url + data);
    res.end();
  })
}).listen(8080);

fs.appendFile('something.html', "Hey", function(err){
  if(err) throw err;
  console.log(err);
})


const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
fs.openFile('something.html', 'w', function(err, file) {
  if(err) throw err;
  console.log('hey theres an error');
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(req.url + file);
  res.end();
})
}).listen(8080);

const http = requir('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res) {
  fs.readFile('something.hml', function(err, data){

  })

  fs.appendFile('something.html', "content", function(err){
    if(err) throw err;
    console.log('something went wrong');
  }

  fs.open('something.html', 'w', function(err, file) {
    if(err) throw err;
    console.log("something else went wrong");
  })

  fs.writeFile('somehting.html', "stuff with strings", function(err) {
    if(err) throw err;
    console.log("ayyayayaya");
  }

  fs.unlink('something.html', function(err) {
    if(err) throw err;
    console.log(err);
  })

  fs.open('something.html', function(err, file){
    if(err) throw err;
    console.log(file);
  })

  fs.readFile('something.html', function(err, data){
    res.writeHead(200, {"Content-Type":"text/html"});
  })

  fs.open('something.html', 'w', function(err, file){
  })

  fs.writeFile('something.html', 'content', function(err){
    if(err) throw err;
  })

  fs.appendFile('something.html', 'more content', fcuntion(err){})

  fs.unlink('something.html', function(err){}
})

xhttp = new XMLHttpRequest()
xhttp.onreadystatechange(function(){
  if(this.readystate == 4 && this.status = 200) {

  }
})

function storage() {
  if( typeof(Storage) !== "undefined") {
    if(sessionStorage.date) {
      sessionStorage = sessionStorage + 400000000;
    }
    else{
      sessionStorage = Date();
    }
    else{
      document.getElementById("place").innerHTML = sessionStorage.date;
    }
  }
}

const url = require('url');
var addr = 'http:www.somewhere.com/path/something.html?name=hey';
var query = url.parse(addr, true);

const http = require('http')
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res){

    var addr = url.parse(req.originalUrl, true);

    fs.readFile('.' + addr.pathname, function(err, data) {
      if(err) {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write(err);
        return res.end();
      }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data + addr.host + addr.path);
        res.end();
    })
}).lsiten(8080);

const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function(req, res) {
  fs.openFile('.' + url.parse(req.originalUrl).pathname, 'w', function(err, file) {
    if(err) throw err;
    console.log('stuff happned');
  }
  res.writeHead(200, {'Content-Type':'etxt/html'});
  res.write('hello' + req.params);
  rs.end();
  })
}).listen(8080)

fs.appendFile('filename.html', 'stuff to add', function(err) {
})

fs.writeFile('filename.html', 'content', function(err) {

})

fs.readFile('filename.html', function(err, data) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(data);
  res.end();
});
