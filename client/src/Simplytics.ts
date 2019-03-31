import * as io from 'socket.io-client';

export default class Simplytics{

    private static readonly SERVER:string   = '127.0.0.1';
    private static readonly PORT:string     = '8181';

    private _socket:    SocketIO.Socket;

    constructor(isDebug:boolean = false){
        this._socket    = io(`${ Simplytics.SERVER }:${ Simplytics.PORT }`);

        this.init();
    }

    private init():void{

    }
}