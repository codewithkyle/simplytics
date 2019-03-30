import * as express from 'express';
import * as io from 'socket.io';
import { createServer } from 'http';

export default class SimplyticsServer{
    
    private _app:       Express.Application;
    private _server:    any;
    private _io:        SocketIO.Server;

    constructor(){
        this._app       = express();
        this._server    = createServer(this._app);
        this._io        = io(this._server);

        this.init();
    }

    private init():void{
        // Tell the server to listen on the port `8181`
        this._server.listen(8181, ()=>{
            console.log('Server listening on 127.0.0.1:8181');
        });

        // Handle new websocket connections
        this._io.on('connection', (socket:any)=>{
            console.log('a user connected');
        });

        // Server a custom dashboard
        // @ts-ignore
        this._app.get('/', (req:Express.Request, res:Express.Response)=>{
            // @ts-ignore
            res.sendFile(`${ __dirname }/dashboard.html`);
        });
    }
}

(()=>{
    new SimplyticsServer();
})();