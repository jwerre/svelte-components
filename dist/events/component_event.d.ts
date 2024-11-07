export declare class ComponentEvent<T, U> {
    value: T;
    target: U;
    raw?: Event;
    constructor(value: T, target: U, raw?: Event);
}
