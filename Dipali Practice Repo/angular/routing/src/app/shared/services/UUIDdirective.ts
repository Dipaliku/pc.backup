import { Directive } from "@angular/core";

@Directive({
    selector : '[UUIDid]'
})
export class UUIDidDirective{
    constructor(){}
    uuid(){
            String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0, 
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
