export class User {

    constructor(
        public email: string, 
        public id : string, 
        private _token:string, 
        private _tokenExpire:Date
        ){}

        //private because it should not be retrivable though this


    get token(){
        // used a getter - code which runs when you access this property
        if(!this._tokenExpire || new Date()>this._tokenExpire){
            return null
        }
        return this._token
    }


}