/*
@Name: Reedo
@Version: 1.0
@Description: Reedo, a basic hyperscript library
@Author: Rancov Emanuel Miroslav
@Author URI: https://github.com/erancov/Reedo
*/
import { getPropertyInfo } from './DOMProperty';

// reedo main class
 class Reedo {
     constructor() {

     }

     nodeElement({tagName, props, children}){
        const $el = document.createElement(tagName);
        function isElement(element) {
            return element instanceof Element || element instanceof HTMLDocument;  
        }

        for (const [k, v] of Object.entries(props || {})) {
            const property = Object.assign({}, getPropertyInfo(k));
            $el.setAttribute(property.mustUseProperty || k, v);
          }
          for (const child of [...children]) {

              if(isElement(child)){
                $el.appendChild(child);
              }else{
                const text = document.createTextNode(child);
                $el.appendChild(text);
              }
            
          }

        return $el;
     }

    createElement(tagName, props, children){

       const el =  this.nodeElement({tagName,props,children});
        return el
    }

    render(node, target) {
        target.appendChild(node);
        return node;
    }
}

export default new Reedo();