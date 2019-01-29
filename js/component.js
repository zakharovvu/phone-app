class Component{
    constructor({ element }) {
        this._element = element;
    }
    hide() {
        this._element.hdden = true;
    }
    show() {
        this._element.hdden = false;
    }
}