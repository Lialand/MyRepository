const http = require('http')
const fs = require('fs')
const path = require('path')

/*import * as http from 'http'
import * as fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { imgName } from './components/Upload'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);*/

const server = http.createServer( function(req, res) {

    let filePath;
    let contentType = 'text/html';

    if (req.url == '/battle_upload.html/image') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            let base64Image = body.split(';base64,').pop();
            console.log(typeof(body));
            fs.writeFile('./src/images/image.jpg', base64Image, {encoding: 'base64'}, function(err) {    //this place is for working with uploading picture
                console.log('File created');
            });
        });
        req.on('end', () => {  
            res.end('ok');
        });
    }
    else if (req.url == '/') {
        filePath = path.join(__dirname, '../public', 'main.html');
        checkType();
        openPage()
    }
    else {
        filePath = path.join(__dirname, '../public', req.url);
        checkType();
        openPage()
    }

    function checkType() {
        const ext = path.extname(filePath);

        switch (ext) {
            case '.css' || '.scss':
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
    }

    function openPage() {
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
    }
  
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('Сервер работает на порту:', PORT) );