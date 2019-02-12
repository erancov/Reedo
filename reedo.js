/*
@Name: Reedo
@Version: 1.0
@Description: Reedo, a basic hyperscript library
@Author: Rancov Emanuel Miroslav
@Author URI: https://github.com/erancov/Reedo
*/

// reedo main class
class Reedo{

    createElement(el, ...props, child){

    }
}


// event Emitter
class EventEmitter {
    constructor(){
        this.events = {};
    }

    subscribe(eventName,callback){
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(callback);
    }

    remove(eventName){
        delete this.events[eventName];  
    }
    

    publish(eventName, ...rest){
      if (this.events[eventName]) {
          this.events[eventName].forEach(function(cb) {
            cb.apply(null, rest);
          });
        }

    }
}
