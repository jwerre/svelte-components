export class ComponentEvent {
    value;
    target;
    raw;
    constructor(value, target, raw) {
        this.value = value;
        this.target = target;
        this.raw = raw;
    }
}
