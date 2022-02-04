import moment from 'moment';


export class Message {
    user: string = '';
    message: string = '';
    timestamp: string = '';

    constructor(message: string) {
        this.user = localStorage.getItem("user");
        this.message = message;
        this.timestamp = moment().format('LT');
    }
}