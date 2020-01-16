/* How to import:

import "dialog-promise";

*/

declare function alertPromise(message:string, opts?:DialogOptions):Promise<void>

declare function promptPromise(message:string, defaultOrOpts?:DialogOptions, optsIfDefault?:DialogOptions):Promise<void>

declare function confirmPromise(message:string, opts?:DialogOptions):Promise<boolean>

declare function miniMenuPromise(listOptions:{value:any, label:string, img?:string, doneFun?:()=>void}[], opts?:DialogOptions):Promise<any>

declare type DialogOptions = {
    askForNoRepeat?:string
    reject?:boolean
    underElement?:Element
}

declare type ElementList=HTMLElement|string

declare function simpleFormPromise(
    params:{
        elementsList:ElementList[],
    }, opts?:DialogOptions
):Promise<any>

declare type DialogContructor<t> = (innerDivDialog:HTMLDivElement, closeWindow:<T>(value:T)=>void) => void;

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

declare module "dialog-promise" {
    export = dialogPromise
}
