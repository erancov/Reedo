// event Emitter
class EventEmitter {
  public events: { [key: string]: any };
  constructor() {
    this.events = {};
  }

  public subscribe(eventName: string, callback: () => void) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  public remove(eventName: string): void {
    delete this.events[eventName];
  }

  public publish(eventName: string, ...rest: any): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb: () => void): void => {
        cb.apply(null, rest);
      });
    }

  }
}

export default EventEmitter;
