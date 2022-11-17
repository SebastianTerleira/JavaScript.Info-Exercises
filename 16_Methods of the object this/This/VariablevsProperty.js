const obj = {
    message: "Hello World",

    getMessage() {
        const message = "Hello Earth";
        return this.message;
    },
};

console.log( obj.getName() ) // Hello World

