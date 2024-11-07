import { SvelteComponentTyped } from "svelte";
import type { HTMLButtonAttributes } from 'svelte/elements';
export type ButtonMode = 'primary' | 'light' | 'accent' | 'accent-alt1' | 'accent-alt2' | 'accent-alt3' | 'outline' | 'plain';
export type ButtonProps = HTMLButtonAttributes & {
    mode?: ButtonMode;
    loader?: boolean;
    round?: boolean;
    block?: boolean;
    action?: boolean;
    size?: 'small' | 'medium' | 'large';
    onButtonClick?: (event: ComponentEvent<undefined, HTMLButtonElement>) => void;
    children?: Snippet;
};
import type { Snippet } from 'svelte';
import { ComponentEvent } from './';
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type ButtonProps_ = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps_, ButtonEvents, ButtonSlots> {
}
export {};
