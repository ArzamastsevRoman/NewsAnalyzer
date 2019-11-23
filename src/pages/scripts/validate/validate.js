export default class Validate {

	constructor (container) {
		this.input = container.querySelector('.search__input');
        this.button = container.querySelector('.search__button')

		this.inputValidate = this.inputValidate.bind(this);
		this.validate = this.validate.bind(this);

		// this.popupInputName
		// 	.addEventListener('click', this.inputValidate);
		// this.popupInputLink
		// 	.addEventListener('click', this.inputValidate);
		// this.popupInputName
		// 	.addEventListener('input', this.inputValidate);
		// this.popupInputLink
		// 	.addEventListener('input', this.inputValidate);
	}

	inputValidate(e) {
		this.validate(e.target);
	}
	
	validate(element) {
		const errorElement = this.popupForm.querySelector(`#error`);
		
		if (element.validity.tooShort) {
			errorElement.textContent = 'Должно быть от 2 до 30 символов';
		  } else if (element.validity.valueMissing) {
			errorElement.textContent = 'Нужно ввести ключевое слово';
		  } else {
			errorElement.textContent = '';
		  }
	}
	
}