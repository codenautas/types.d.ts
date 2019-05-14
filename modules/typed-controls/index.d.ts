declare module "typed-controls" {
    type TypedControlBase<T>={} | {
        controledType:{typeInfo:{
            valueNoData?:string
            valueUnknownData?:string
        }}
        setTypedValue(value:T, fromUserInteraction?:boolean):void
        getTypedValue:()=>any,
        disable:(disabled?:boolean)=>void,
    }
    type TypedControl<T>=TypedControlBase<T> & HTMLElement;
    function adaptElement<T>(control:TypedControl<T>, typeInfo:any):void
}