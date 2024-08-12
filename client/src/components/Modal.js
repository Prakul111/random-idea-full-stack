class modal {
    constructor() {
         this._modal = document.querySelector('#modal');
         this._modalBtn = document.querySelector('#modal-btn');
         this.addEventListeners();
    }

    addEventListeners() {
        this._modalBtn.addEventListener('click', this.open.bind(this) );
        window.addEventListener('click', this.outsideClick.bind(this));
        document.addEventListener('closemodal', () => this.close());
    }

     open(e) {
        this._modal.computedStyleMap.display = 'block';
    };
    
     close () {
        this._modal.computedStyleMap.display = 'none';
    
    };
    
     outsideClick(e) {
        if(e.target === this._modal) {
            this.close();
        }
    }
}


export default modal;