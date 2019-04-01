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
    private _uuid:      string;

    constructor(isDebug:boolean = false, server:string = null, port:number = 8181){
        
        // Server
        Simplytics.SERVER   = (server === null) ? window.location.hostname : server;
        Simplytics.PORT     = port;

        // Socket
        this._socket    = io.connect(`${ Simplytics.SERVER }:${ Simplytics.PORT }`);

        // Variables
        this._isDebug   = isDebug;
        this._uuid      = window.localStorage.getItem(`${ window.location.host }_simplytics`);

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

        if(this._uuid === null){
            this._uuid = uuid();
            window.localStorage.setItem(`${ window.location.host }_simplytics`, `${ this._uuid }`);
            if(this._isDebug){
                console.log(`Generated a new UUID ${ this._uuid }`);
            }
        }else if(this._isDebug){
            console.log(`Using existing UUID ${ this._uuid }`);
        }

        this._socket.emit('identify', this._uuid);
    }
}