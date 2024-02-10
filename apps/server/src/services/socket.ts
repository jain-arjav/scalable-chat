import { Server } from 'socket.io';

class SocketService {
    private _io: Server;

    constructor() {
        console.log('Init socket server');
        this._io = new Server();

    }

    public initListners() {
        const io = this._io;
        console.log('Init Listners');
        io.on('connection', (socket) => {
            console.log(`a user connected`, socket.id);
            socket.on('event', async ({ message }: { message: string }) => {
                console.log(`New Message Received: ${message}`);
            });
        });
    }
    get io() {
        return this._io;
    }

}
export default SocketService;