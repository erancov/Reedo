/*
@Name: Reedo
@Author: Rancov Emanuel Miroslav
@Description: Reedo, a basic hyperscript library
@Author URI: github:
*/

// reedo main class
class Reedo{

    createElement(el, ...props, ){

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