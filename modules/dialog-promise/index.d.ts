/* How to import:

import "dialog-promise";

*/

type Message = string | HTMLElement | {label:string, attributes:{[k:string]:string}, value:any, hotkey:string}

declare function alertPromise(message:Message, opts?:DialogOptions):Promise<void>

declare function promptPromise(message:Message, defaultOrOpts?:DialogOptions, optsIfDefault?:DialogOptions):Promise<void>

declare function confirmPromise(message:Message, opts?:DialogOptions & {rejectFalse?:boolean, buttonsDef:ButtonDef[]}):Promise<boolean>

declare function miniMenuPromise(listOptions:{value:any, label:string, img?:string, doneFun?:()=>void}[], opts?:DialogOptions):Promise<any>

declare type DialogOptions = {
    askForNoRepeat?:string
    reject?:boolean
    underElement?:Element
}

declare function simpleFormPromise(
    params:{
        elementsList:Message[],
    }, opts?:DialogOptions
):Promise<any>

declare type DialogContructor<t> = (innerDivDialog:HTMLDivElement, closeWindow:<T>(value:T)=>void) => void;

declare type buttonDef = {label:string, value:any}

declare type DialogOpts<T> = {
    main?:object,
    setAttrs?:object,
    replacingElement?:HTMLElement,
    closeValue?:T
    reject?:boolean
    withCloseButton?:any
    underElement?:HTMLElement
}

declare function dialogPromise<T>(dialogConstructor:DialogContructor<T>, opts?:DialogOpts<T>):Promise<T>

declare const DialogPromise:{
    defaultOpts:{
        withCloseButton:boolean,
        reject:boolean,
        rejectWhenCancelPrompt:boolean|null, // null = same as reject
        rejectFalse:boolean, // only for confirmPromise
        lengthMenuWithoutFilter:number,
        disableKeyboads:boolean,
        autoFocus:boolean
    }
}

declare type DialgoPromiseHTMLExtras = {
    dialogPromiseDone:()=>void
}

declare module "dialog-promise" {
    export = dialogPromise
}
