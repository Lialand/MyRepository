const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer( (req, res) => {

    let filePath = path.join(__dirname, '../public', req.url === '/' ? 'main.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    let base = path.join(__dirname, './', req.url === '/base.json' ? 'base.json' : req.url)

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

    if (!ext) {
        filePath += '.html'
    }

    console.log(base);

    fs.readFile(filePath || base, (err, content) => {
        if (err) {
            fs.readFile( path.join(__dirname, '../public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                }
                else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        }
        else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content);
        }
    })

    // fs.readFile(base, (err, content) => {
    //     res.end(content)
    // })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('Сервер работает на порту:', PORT) );