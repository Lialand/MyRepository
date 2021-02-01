const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer( function(req, res) {

    let filePath;

    if (req.url == '/battle_upload.html/image') {
        filePath = path.join(__dirname, '../public', 'main.html');
        console.log(req.body);
    }
    else if (req.url == '/')
        filePath = path.join(__dirname, '../public', 'main.html');
    else
        filePath = path.join(__dirname, '../public', req.url);

    const ext = path.extname(filePath);
    let contentType = 'text/html';
    console.log(req.url === '/battle_upload.html/image');

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        case '.svg':
            contentType = 'image/svg+xml'
            break
        case '.json':
            contentType = 'application/json'
            break
        default: 
            contentType = 'text/html'
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            fs.readFile( path.join(__dirname, '../public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                }
                else {
                    res.writeHead(404, {
                        'Content-Type': 'text/html'  //special checker for errors
                    })
                    res.end(data)
                }
            })
        }
        else {
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(data);
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('Сервер работает на порту:', PORT) );