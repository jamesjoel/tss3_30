import { Birth } from './birth.interface';
export interface Signup {
    fullName : string,
    city : string,
    age : number,
    gender : string,
    email : string,
    password: string,
    contact : number,
    birth : Birth
}