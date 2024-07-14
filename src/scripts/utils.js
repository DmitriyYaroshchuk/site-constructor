export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}
export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const keys = Object.keys(styles);
    const arr = keys.map(key => {
        return `${key}: ${styles[key]}`;
    });
    return arr.join(';');
}

export function block(type) {
    return `
        <form action="" name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" type="text" name="styles" placeholder="styles">
            </div>
            <button class="btn btn-primary btn-sm" type="submit">Добавить</button>
        </form>
    `;
}