/* How to import:

import "dialog-promise";

*/

declare function alertPromise(message:string, opts?:DialogOptions):Promise<void>

declare function confirmPromise(message:string, opts?:DialogOptions):Promise<void>

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

declare function dialogPromise():Promise<void>

declare module "dialog-promise" {
    export = dialogPromise
}
