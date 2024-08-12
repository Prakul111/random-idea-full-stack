class IdeaForm  {
    constructor () {
        this._formModal = document.querySelector('#form-modal');
    }

    addEventListeners() {
        this._form.addEventListener('submit', this.handleSubmit.bind(this));
    }


    handleSubmit(e) {
        e.preventDefault();

        //console.log('SUBMIT');
        const idea = {
            text: this._form.elements.text.value,
            tag: this._form.elements.tag.value,
            username: this._form.elements.username.value,
        } 
    }

    render() {
        this._formModal.innerHTML = `
            <form id="idea-form">
	<div class="form-control">
		<label for="idea-text">Enter a Username</label>
		<input type="text" name="username" id="username" />
	</div>
	<div class="form-control">
		<label for="idea-text">Whats your Idea</label>
		<textarea type="text" name="username" id="idea-text"></textarea>
	</div>
	<div class="form-control">
		<label for="tag">Tag</label>
		<input type="text" name="tag" id="tag" />
	</div>
	<button class="btn" type="submit" id="submit">Submit</button>
</form>
                
        `;
        this._form = documen.querySelector('#idea-form');
        this.addEventListeners();
    }
    
}

export default IdeaForm;