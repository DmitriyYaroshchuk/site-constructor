import {col, css, row} from "../utils.js";

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    }
    toHTML() {
        if (typeof this.value === 'string') {
            return row(this.value, css(this.options.styles));
        }
        const html = this.value.map(item => col(item)).join('');
        return row(html, css(this.options.styles));
    }
}