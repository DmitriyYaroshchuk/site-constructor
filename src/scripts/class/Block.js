class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error('Метод toHTML должен быть реализован');
    }
}