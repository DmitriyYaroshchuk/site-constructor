import {col, css, row} from "../utils.js";

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    }
    toHTML() {
        const { tag = 'h1', styles } = this.options;
        return row(col( `<${tag}>${this.value}</${tag}>`), css(styles));
    }
}