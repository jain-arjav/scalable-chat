import http from 'http'
import SocketService from './services/socket'
async function init() {
    const socketService = new SocketService();

    const httpserver = http.createServer()

    socketService.io.attach(httpserver);


    const PORT = process.env.PORT ? process.env.PORT : 8000
    httpserver.listen(PORT, () => console.log(`HTTP server started at PORT: ${PORT}`));
    socketService.initListners();
}
init();