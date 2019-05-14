declare module "typed-controls" {
    type TypedControlBase<T>={} | {
        controledType:{
            typeInfo:{
                valueNoData?:string
                valueUnknownData?:string
                
            }
            isValidTypedData(value:T):boolean
            fromPlainJson(json:string):T
            toPlainJson(value:T):string
        }
        setTypedValue(value:T, fromUserInteraction?:boolean):void
        getTypedValue():T
        disable(disabled?:boolean):void
    }
    type TypedControl<T>=TypedControlBase<T> & HTMLElement;
    function adaptElement<T>(control:TypedControl<T>, typeInfo:any):void
}