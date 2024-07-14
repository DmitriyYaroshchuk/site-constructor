export class Site {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    render(model) {
        this.element.textContent = '';
        model.forEach(block => {
            this.element.insertAdjacentHTML('beforeend', block.toHTML());
        });
    }
}