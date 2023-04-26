const http = require('http');
 
 
// response.setHeader('Content-Type', 'text/html');
    // response.statusCode = 200;
 
//     const { method } = request;
 
//     if(method === 'GET') {
//         response.end('<h1>Hello!</h1>');
//     }
 
//     if(method === 'POST') {
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body);
//             response.end(`<h1>Hai, ${name}!</h1>`);
//         })
//     }
// };
 

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');

    const { method, url } = request;

    if (url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah Hompage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if (url === '/about'){
        if (method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halaman ini adalah halaman about',
            }));
        } else if (method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `haloo, ${name}! Ini adalah halaman about`
                }));
            });
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${ method } request`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
}

const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
