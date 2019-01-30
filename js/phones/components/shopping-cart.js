import Component from '../../component.js';

export default class ShoppingCart extends Component {
  constructor({ element }) {
    super({ element });
    this._arrPhoneInCard = '';
    this._render();
  }
  _addContentToHtml(content) {
   this._arrPhoneInCard += `<li>${content.dataset.phoneId}</li>`;
      
   this._render();
  }


  _render() {
   

    this._element.innerHTML = `
      <p>Shopping Cart</p>
      <ul>
        
        ${this._arrPhoneInCard}
      </ul>
    `;
  }
}
