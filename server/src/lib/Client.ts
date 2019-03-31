import SimplyticsServer from '../SimplyticsServer';

export default class Client{
    
    public  socket:     SocketIO.Socket;
    private _server:    SimplyticsServer;
    
    constructor(socket:SocketIO.Socket, server:SimplyticsServer){
        this.socket     = socket;
        this._server    = server;

        this.init();
    }

    /**
     * Called when a new Client object is created.
     */
    init():void{
        this.socket.on('disconnect', ()=>{ this._server.handleDisconnect(this) });
    }
}