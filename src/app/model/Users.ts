import { User } from './User';
export class Users {
    private _Users: User[] = [];

    adiciona(user: User): void {
        this._Users.push(user);
    }

    exibe(): User[] {
        return [].concat(this._Users);
    }
}