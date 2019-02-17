import Reedo from './src/reedo';

const ListItems = props => {  
    return props.items.map(item =>{
       return Reedo.createElement('li', {className:'item'}, [item])
    })
}



class App {
    constructor(){
        this.state = {
            items:['red', 'blue', 'green', 'black'],
        }
    }

    handleClick(){
        console.log('click', this);
    }

    render(){
       return(
            Reedo.createElement('div', {className:'container'}, [
                "Hello World!",
                Reedo.createElement('button', {id: 'click', className:'btn'}, ['Click Me']),
                Reedo.createElement('ul',{className:'list-items'}, [

                    ListItems(this.state)
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