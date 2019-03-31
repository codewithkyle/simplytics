import * as io from 'socket.io-client';

export default class Simplytics{

    private static SERVER:string;
    private static PORT:number;

    private _socket:    SocketIO.Socket;

    constructor(server:string = null, port:number = 8181, isDebug:boolean = false){
        
        Simplytics.SERVER   = (server === null) ? window.location.hostname : server;
        Simplytics.PORT     = port;

        this._socket    = io.connect(`${ Simplytics.SERVER }:${ Simplytics.PORT }`);
        this.init();
    }

    private init():void{

    }
}