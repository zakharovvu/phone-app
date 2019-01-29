import Component from '../../component.js';

export default class PhoneViewer extends Component{
  constructor({ element, onBack }) {
    super({ element });
    console.log(this);
    this._onBack = onBack;

    // this._element.addEventListener('click', (event) => {
    //   const backButton = event.target.closest('[data-element="back-button"]');
    //   if (!backButton) {
    //     return;
    //   }
      
    //   this._onBack();

    // });
    this.on('click', 'back-button', this._onBack);
    this.on('click', 'small-image', () => {
      this._element.querySelector('[data-element="large-image"]').src = event.target.src;
    });
  }
  show(phoneDetails) {
      this._phoneDetails = phoneDetails;
      super.show(); 
     
      
      this._render();
  }

  _render() {
     const phone = this._phoneDetails;
     
      this._element.innerHTML = `
      <img data-element="large-image" class="phone" src="${phone.images[0]}">
  <button data-element="back-button">Back</button>
  <button>Add to basket</button>
  <h1>${phone.name}</h1>
  <p>${phone.description}</p>
  <ul class="phone-thumbs">
  ${ phone.images.map(imageUrl => `
  <li> <img src="${imageUrl}" data-element="small-image"> </li>
    `).join('')}
    
   
  </ul>`
  }
}