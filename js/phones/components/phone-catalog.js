import Component from '../../component.js';

export default class PhoneCatalog extends Component {
    constructor({ element, phones = [], onPhoneSelected = () => {} }) {

        super({ element }); 

        this._element = element;
        this._phones = phones;
        this._onPhoneSelected = onPhoneSelected;
        this._render();
        // this._element.addEventListener('click', (event) => {
            
        //     let datailsLink = event.target.closest('[data-element="details-link"]');
           
        //     if (!datailsLink) {
        //         return;
        //     }
        //     let phoneElement = datailsLink.closest('[data-element="phone"]');

        //     this._onPhoneSelected(phoneElement.dataset.phoneId)
        // });
            this.on('click', '[data-element="phone"]', (event) => {
                let phoneElement = event.target.closest('[data-element="phone"]');
                this._onPhoneSelected(phoneElement.dataset.phoneId);
                
            });
    }
    on(eventName, selector, callback) {
        this._element.addEventListener(eventName, (event) => {
            
            let delegateTarget = event.target.closest(selector);
           
            if (!delegateTarget) {
                return;
            }
            callback(event);
        });
    }
    
    _render() {
        this._element.innerHTML = `
        <ul class="phones">
      ${this._phones.map(phone => `
      
      <li class="thumbnail" data-element="phone" data-phone-id="${ phone.id }">
      <a href="#!/phones/${ phone.id }" class="thumb" data-element="details-link">
        <img alt="${ phone.name }" src="${ phone.imageUrl }">
      </a>
      
      <div class="phones__btn-buy-wrapper">
        <a class="btn btn-success">
          Add
        </a>
      </div>
      
      <a href="#!/phones/motorola-xoom-with-wi-fi" data-element="details-link">${ phone.name }</a>
      <p>${ phone.snippet }</p>
      </li> 
      
      `).join('')}
      </ul>`
    }
}