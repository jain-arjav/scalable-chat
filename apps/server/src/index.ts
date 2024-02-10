import http from 'http'

async function init() {
    const httpserver = http.createServer()
    const PORT = process.env.PORT ? process.env.PORT : 8000
    httpserver.listen(PORT, () => console.log(`HTTP server started at PORT: ${PORT}`));

}
init();