
import fs from 'fs';
import http2 from 'http2';

const server = http2.createSecureServer({
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt'),
}, (req, res) => {

  console.log(req.url);
  
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(`<h1>URL ${req.url}</h1>`);
  // res.end();

  // const data = { name: 'Johm Doe', age: 30, city: 'New York' };
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end( JSON.stringify(data) );

  if (req.url === '/') {
    const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end( htmlFile );
  } else if (req.url === '/css/styles.css') {
    const cssFile = fs.readFileSync('./public/css/styles.css');
    res.writeHead(200, { 'Content-Type': 'text/css' })
    res.end(cssFile);
  } else if (req.url === '/js/app.js') {
    const jsFile = fs.readFileSync('./public/js/app.js');
    res.writeHead(200, { 'Content-Type': 'application/javascript' })
    res.end(jsFile);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end();
  }

});

server.listen(8080, () => {
  console.log('Server runing on port 8080');
  
});