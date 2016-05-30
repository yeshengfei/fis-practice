import People from './People.es6';
import $ from 'jquery';

class Developer extends People {
    // age = 20

    // static CAREER = 'DEVELOPER';
    constructor(name) {
        super(name);
        this.age = 3;
        console.log($('body'));
    }

    sayHello(words) {
        super.sayHello(words);
        console.log('dev say ' + words + this.age);
    }

    program( ) {
        console.log("I'm coding...");
    }
}

Developer.CAREER = 'DEV'

export default Developer;