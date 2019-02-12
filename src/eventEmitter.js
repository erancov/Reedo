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

export default EventEmitter;