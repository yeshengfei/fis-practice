/**
 * 样式与模板依赖
 */
require.loadCss({content: __inline('/style/main.less')});
var devTpl = __inline('/style/people.tpl');


/**
 * 逻辑依赖
 */
import People from './People.es6';
import $ from 'jquery';

class Developer extends People {
    constructor(name) {
        super(name);
        this.age = 3;
        console.log($('body'));
        // require('/style/')
    }

    sayHello(words) {
        super.sayHello(words);
        console.log('dev say ' + words + this.age);
    }

    program( ) {
        console.log("I'm coding...");
    }
}

//静态变量
Developer.CAREER = 'DEV';

export default Developer;