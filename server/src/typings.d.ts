declare module 'express';
declare module 'http';
declare module 'socket.io';

interface IServer{
    listen: (port:number, response:Function)=>void;
}