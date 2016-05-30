class People {
    constructor(name) {
        this.name = name;
    }

    sayHello(words) {
        console.log(`${this.name} hello, ${words}!`);
    }

}

export default People;