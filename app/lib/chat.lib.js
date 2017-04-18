import IO from 'socket.io-client';

class Chat {
    constructor(url, io = IO) {
        if (!url) {
            throw new Error('remote socket url is required ...');
        }

        this.socket = io(url);
    }

    getClient() {
        return this.socket;
    }
}

export default Chat;
