import SimplyticsServer from '../SimplyticsServer';

export default class Client{
    
    public  socket:     SocketIO.Socket;
    private _server:    SimplyticsServer;

    public id:  string;
    
    constructor(socket:SocketIO.Socket, server:SimplyticsServer){
        this.socket     = socket;
        this._server    = server;
        this.id         = this.socket.id;

        this.init();
    }

    /**
     * Called when a new Client object is created.
     */
    private init():void{
        console.log(`${ this.id } connected`);
        this.socket.on('disconnect', ()=>{ this.disconnect(); });
    }

    private disconnect():void{
        console.log(`${ this.id } disconnected`);
        this._server.handleDisconnect(this);
    }
}