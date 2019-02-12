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

     nodeElement({tagName, props, children}){
        const $el = document.createElement(tagName);

        for (const [k, v] of Object.entries(props)) {
            if(k === 'className'){
                $el.setAttribute('class', v);
            }else{
              $el.setAttribute(k, v);    
            } 
          }
          for (const child of children) {
              if(typeof child === 'string'){
                const text = document.createTextNode(child);
                $el.appendChild(text);
              }else{
                $el.appendChild(child);
              }
            
          }

        return $el;
     }

    createElement(tagName, { props = {}, children = [] } = {}){

       const el =  this.nodeElement({tagName,props,children});
        return el
    }

    render(node, target) {
        target.appendChild(node);
        return node;
    }
}

export default new Reedo();