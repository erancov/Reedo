/*
@Name: Reedo
@Version: 1.0
@Description: Reedo, a basic hyperscript library
@Author: Rancov Emanuel Miroslav
@Author URI: https://github.com/erancov/Reedo
*/


// reedo main class
 class Reedo {
     constructor() {

     }

    createElement(tagName, { props = {}, children = [] } = {}){
        return {
            tagName,
            props,
            children
        }
    }
}

export default new Reedo();