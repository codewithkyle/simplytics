import * as express from 'express';
import * as io from 'socket.io';
import { createServer } from 'http';

import Client from './lib/Client';

export default class SimplyticsServer{
    
    // Server
    private _app:       Express.Application;
    private _server:    IServer;
    private _io:        SocketIO.Server;

    // Sockets
    private _clients:   Array<Client>;

    constructor(){
        
        // Server
        this._app       = express();
        this._server    = createServer(this._app);
        this._io        = io(this._server);

        // Sockets
        this._clients   = [];

        this.init();
    }

    private init():void{
        // Tell the server to listen on the port `8181`
        this._server.listen(8181, ()=>{
            console.log('Server listening on 127.0.0.1:8181');
        });

        // Handle new websocket connections
        this._io.sockets.on('connection', (socket:SocketIO.Socket)=>{
            const newSocket = new Client(socket, this);
            this._clients.push(newSocket);
        });

        // Serve a custom admin dashboard
        // @ts-ignore
        this._app.get('/', (req:Express.Request, res:Express.Response)=>{
            // @ts-ignore
            res.sendFile(`${ __dirname }/dashboard.html`);
        });
    }

    /**
     * Called when a user disconnects from the server.
     * @param client `Client`
     */
    public handleDisconnect(client:Client):void{
        // Remove the client from the array of clients
        for(let i = 0; i < this._clients.length; i++){
            if(this._clients[i].socket.id === client.id){
                this._clients.splice(i, 1);
            }
        }
	}
}

// Start the server
new SimplyticsServer();