

function checkEventProperty(el, props){


    if(props.hasOwnProperty(defaultEvents[props])){
        el.addEventListener(...Object.key(props), this.handleClick)
    }

}




const defaultEvents = {
    click: 'onClick',
    change: 'onChange'
}

   /**
     * This will simulate a DOM event in full (as you would do in reality)
     * e.g simualteDOMEvent(element, 'click') should simulate the click event
     * of the element exactly as it would work if you would actually click
     * the element with your mouse
     *
     * @static
     * @param {*} element
     * @param {Event} eventType https://developer.mozilla.org/en-US/docs/Web/Events
     * @memberof Html
     */
    
    function simulateDOMEvent(element, eventType) {
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventType, false, true);
        element.dispatchEvent(evt);
    }
