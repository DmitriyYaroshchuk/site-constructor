import {model} from "./model.js";
import {App} from "./class/App.js";

document.addEventListener('DOMContentLoaded', () => {
    new App(model).init();
});