const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    });

    io.on("connection", (Socket) => {
        console.log("un client est connecté", Socket.id);

        Socket.on("disconnect", ()=> {
            console.log("un client s'est déconnecté", Socket.id);
        });
    });

    return io;
};

const getIo = ()=> {
    if(!io){
        throw new Error("Socket.io n'est pas initialisé");
    }

    return io;
}

module.exports = { initializeSocket, getIo };