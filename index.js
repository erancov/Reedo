import Reedo from './src/reedo';

const ListItems = props => {  
    return props.items.map(item =>{
       return [Reedo.createElement('li', {className:'item'}, [item])]
    })
}

class App {
    constructor(){
        this.state = {
            items:['red', 'blue', 'green']
        }
    }

    render(){
       return(
            Reedo.createElement('div', {className:'container'}, [
                Reedo.createElement('ul',{className:'list-items'}, [

                    Reedo.createElement('li',null, [

                        'Link1'
                    ]),
                    Reedo.createElement('li',{id:'1'}, [

                        'Link2'
                    ])
                ])
            ])
       );
    }
}

let app = new App();





Reedo.render(
    app.render(),
    document.getElementById('root')
)