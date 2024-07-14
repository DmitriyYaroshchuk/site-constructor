import {block} from "../utils.js";
import {TitleBlock} from "./TitleBlock.js";
import {TextBlock} from "./TextBlock";
import {ColumnsBlock} from "./ColumnsBlock";
import {ImageBlock} from "./ImageBlock";

export class SiteBar {
    constructor(selector, updateHTML) {
        this.element = document.querySelector(selector);
        this.updateHTML = updateHTML;
    }

    init() {
        this.element.insertAdjacentHTML('afterbegin', this.template);
        this.element.addEventListener('submit', this.add.bind(this));
    }

    get template() {
        return [
            block('title'),
            block('text'),
            block('columns'),
            block('image')
        ].join('')
    }

    add(event) {
        event.preventDefault();
        const type = event.target.name;
        const value = event.target.elements['value'].value;
        const styles = event.target.elements['styles'].value;
        let newBlock;

        switch (type) {
            case 'title': {
                newBlock = new TitleBlock(value, {styles});
                break;
            }
            case 'text': {
                newBlock = new TextBlock(value, {styles});
                break;
            }
            case 'columns': {
                newBlock = new ColumnsBlock(value, {styles});
                break;
            }
            case 'image': {
                newBlock = new ImageBlock(value, {styles});
            }
        }
        this.updateHTML(newBlock);
        event.target.elements['value'].value = '';
        event.target.elements['styles'].value = '';
    }
}