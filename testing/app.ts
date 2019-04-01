import Simplytics from '../client/Simplytics';

export default class App{

    private _simplytics:    Simplytics;

    constructor(){
        this._simplytics    = new Simplytics(true);
    }
}

(()=>{
    new App();
})();