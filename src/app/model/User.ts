export class User {

    constructor(private _id: number, 
        private _name: string, 
        private _username: string, 
        private _email: string, 
        private _address: Address, 
        private _phone: string, 
        private _website: string, 
        private _company: Company) {}
    

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get address() {
        return this._address;
    }

    get phone() {
        return this._phone;
    }

    get website() {
        return this._website;
    }

    get company() {
        return this._company;
    }
}

export class Address {
    constructor(private _street: string,
    private _suite: string,
    private _city:string,
    private _zipcode: string,
    private _geo: Geo) {}

    get street() {
        return this._street;
    }

    get suite(){
        return this._suite;
    }

    get city(){
        return this._city;
    }

    get zipcode() {
        return this._zipcode;
    }

    get geo() {
        return this._geo;
    }
}

export class Geo {
    constructor(private _lat: string, private _lng: string) {}
    
    get lat() {
        return this._lat;
    }

    get lng() {
        return this._lng;
    }
}

export class Company {
    constructor(private _name: string, private _catchPhrase: string, private _bs: string){}

    get name(){
        return this._name;
    }

    get catchPhrase(){
        return this._catchPhrase;
    }

    get bs() {
        return this._bs;
    }
}