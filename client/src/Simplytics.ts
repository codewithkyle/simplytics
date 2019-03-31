import * as io from 'socket.io-client';
import * as uuid from 'uuid/v4';

export default class Simplytics{

    // Server
    private static SERVER:string;
    private static PORT:number;

    // Socket
    private _socket:    SocketIO.Socket;

    // Variables
    private _isDebug:   boolean;

    constructor(isDebug:boolean = false, server:string = null, port:number = 8181){
        
        // Server
        Simplytics.SERVER   = (server === null) ? window.location.hostname : server;
        Simplytics.PORT     = port;

        // Socket
        this._socket    = io.connect(`${ Simplytics.SERVER }:${ Simplytics.PORT }`);

        // Variables
        this._isDebug   = isDebug;

        this.init();
    }

    private init():void{
        this._socket.on('connect', ()=>{ this.connect(); });
    }

    /**
     * Called when the sockets `connect` event fires.
     */
    private connect():void{
        if(this._isDebug){
            console.log(`Simplytics connected with the server at ${ Simplytics.SERVER }:${ Simplytics.PORT }`);
        }
    }
}