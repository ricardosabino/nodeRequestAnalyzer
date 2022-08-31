import * as http from 'http';

const hostname = '0.0.0.0';
const port = 3000;
let num = 0;

const server = http.createServer((req, res) => {
    console.log(`----- ${(num++)} -----`);

    var body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        console.log(`Time:`, new Date());
        console.log(`Url: ${req.url}`);
        console.log(`Method: ${req.method}`);
        console.log(`Headers:`, req.headers);
        console.log(`Body:`, body);
        res.statusCode = 200;
        res.end();
        });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});