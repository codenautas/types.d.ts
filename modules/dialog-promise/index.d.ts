declare module "dialog-promise" {
    function alertPromise(message:string, opts?:DialogOptions):Promise<void>

    function miniMenuPromise(listOptions:{value:any, label:string, img?:string, doneFun?:()=>void}[], opts?:DialogOptions):Promise<any>

    type DialogOptions = {
        askForNoRepeat?:string
        reject?:boolean
        underElement?:Element
    }
}
