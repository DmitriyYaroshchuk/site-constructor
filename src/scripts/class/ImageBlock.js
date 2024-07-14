import {css, row} from "../utils";

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options);
    }
    toHTML() {
        const { styles, imageStyles, alt = '' } = this.options;
        return row(`<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}"/>`, css(styles));
    }
}