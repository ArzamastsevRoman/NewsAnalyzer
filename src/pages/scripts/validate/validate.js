export default class Validate {

	constructor (container) {
        this.container = container;
		this.input = container.querySelector('.search__input');
        this.button = container.querySelector('.search__button')

		this.inputValidate = this.inputValidate.bind(this);
		this.validate = this.validate.bind(this);

		this.input
            .addEventListener('click', this.inputValidate);
        this.input
		    .addEventListener('input', this.inputValidate);
	}

	inputValidate(e) {
		this.validate(e.target);
	}
	
	validate(element) {
		const errorElement = this.container.querySelector(`.search__error`);
		
		if (element.validity.tooShort) {
			errorElement.textContent = 'Должно быть от 2 до 30 символов';
		  } else if (element.validity.valueMissing) {
			errorElement.textContent = 'Нужно ввести ключевое слово';
		  } else {
			errorElement.textContent = '';
		  }
	}
	
}