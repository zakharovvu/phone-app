export default class Component{
    constructor({ element }) {
        this._element = element;
    }
    hide() {
        this._element.hidden = true;
    }
    show() {
        
        this._element.hidden = false;
        console.log( this._element)
    }
    on(eventName, elementName, callback) {
        this._element.addEventListener(eventName, (event) => {
            
            let delegateTarget = event.target.closest(`[data-element="${elementName}"]`);
           
            if (!delegateTarget) {
                return;
            }
            callback(event);
        });
    }
}