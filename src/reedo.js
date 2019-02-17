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

     checkChildrenDOM(nodeElement, child){
         if(Array.isArray(child)){
             for(let c of child){
                nodeElement.appendChild(c);
             }
            return
         }else if (typeof child === 'string'){
            return nodeElement.appendChild(document.createTextNode(child));
         }else {
           return nodeElement.appendChild(child);
         }

     }

    //  TODO:check what kind of children we have and append
     appendChildDOM(nodeElement, children) {

          for (const child of children) {
            // return the DOM Element with appended child
            this.checkChildrenDOM(nodeElement, child);
            
          }
          return nodeElement;

     }

     // check if props not null and set attribute to element
     setDOMProperty(nodeElement, props){
         if(props){
            for (const [k, v] of Object.entries(props)) {
                const attr = Object.assign({}, getPropertyInfo(k));
                nodeElement.setAttribute(attr.mustUseProperty || k, v);
              }
              return nodeElement;
         }
        return nodeElement;
     }

     createNodeElement(tagName, props, children){
        const nodeElement = document.createElement(tagName);
        
        //set the attributes name and value
        this.setDOMProperty(nodeElement, props);

        //append the child
        this.appendChildDOM(nodeElement, children);

        return nodeElement;
     }

     //main method 
    createElement(tagName, props, children){
        //return created element with props and children 
        return this.createNodeElement(tagName,props,children);
        
    }

    //render method for appending nodeElements to the DOM
    render(node, target) {
        target.appendChild(node);
        return node;
    }
}

export default new Reedo();