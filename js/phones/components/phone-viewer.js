
export default class PhoneViewer{
    constructor({ element }) {
        this._element = element;
        
    }
    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        this._element.hidden = false;
        this._render();
    }

    _render() {
       const phone = this._phoneDetails;
        //console.log(phone);
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