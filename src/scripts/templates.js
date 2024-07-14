import {col, css, row} from "./utils";

function title(block) {
    const { tag = 'h1', styles } = block.options;
    return row(col( `<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

function columns(block) {
    const html = block.value.map(item => col(item)).join('');
    return row(html, css(block.options.styles));
}

function image(block) {
    const { styles, imageStyles, alt = '' } = block.options;
    return row(`<img src="${block.value}" style="${css(imageStyles)}" alt="${alt}"/>`, css(styles));
}
const templates = {
    title,
    text,
    columns,
    image
}