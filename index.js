import Reedo from './src/reedo';

class App {
    render(){
        const p =  Reedo.createElement('p', {
            props: {className: 'text-center',style:'color:red' },
             children: ['Hello from v-dom']
         });

        let el = Reedo.createElement('div', {
       props: {className: 'container', id:"manu"},
        children: [p]
    });

        return el;
    }
}

let app = new App();





Reedo.render(
    app.render(),
    document.getElementById('root')
)