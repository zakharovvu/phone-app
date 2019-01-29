import Component from '../../component.js';

export default class PhoneViewer extends Component{
 
  show(phoneDetails) {
      this._phoneDetails = phoneDetails;
      super.show(); 
     
      
      this._render();
  }

  _render() {
     const phone = this._phoneDetails;
     
      this._element.innerHTML = `
      <img class="phone" src="${phone.images[0]}">
  <button>Back</button>
  <button>Add to basket</button>
  <h1>${phone.name}</h1>
  <p>${phone.description}</p>
  <ul class="phone-thumbs">
    <li>
      <img src="${phone.images[0]}">
    </li>
    <li>
      <img src="${phone.images[1]}">
    </li>
    <li>
      <img src="${phone.images[2]}">
    </li>
    <li>
      <img src="${phone.images[3]}">
    </li>
    <li>
      <img src="${phone.images[4]}">
    </li>
    <li>
      <img src="${phone.images[5]}">
    </li>
  </ul>`
  }
}