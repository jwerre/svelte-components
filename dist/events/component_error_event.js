export class ComponentErrorEvent {
    error;
    message;
    stack;
    constructor(error) {
        this.error = error;
        this.message = error.message;
        this.stack = error.stack;
    }
}
