import Reedo from './src/reedo';

class App {
    render(){
        let el = Reedo.createElement('div', {className: 'container'}, ['Hello from v-dom']);
        console.log('el',el)
    }
}

let app = new App();

app.render()