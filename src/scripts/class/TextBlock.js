import {col, css, row} from "../utils.js";

export class TextBlock extends Block{
    constructor(value, options) {
        super('text', value, options);
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}