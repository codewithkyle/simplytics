import SimplyticsServer from '../SimplyticsServer';

export default class Client{
    
    public  socket:     SocketIO.Socket;
    private _server:    SimplyticsServer;

    public id:      string;
    public uuid:    string;
    
    constructor(socket:SocketIO.Socket, server:SimplyticsServer){
        this.socket     = socket;
        this._server    = server;
        this.id         = this.socket.id;

        this.init();
    }

    /**
     * Called when a new Client object is created.
     * Listen for socket events.
     */
    private init():void{
        console.log(`${ this.id } connected`);
        this.socket.on('disconnect', ()=>{ this.disconnect(); });
        this.socket.on('identify', (uuid:string)=>{ this.setIdentity(uuid); });
    }

    /**
     * Called when the sockets `disconnect` event is fired.
     */
    private disconnect():void{
        console.log(`${ this.id } disconnected`);
        this._server.handleDisconnect(this);
    }

    /**
     * Sets the `uuid` for the client.
     * @param uuid `string`
     */
    private setIdentity(uuid:string):void{
        this.uuid = uuid;
    }
}