declare module "typed-controls" {
    type TypedControlBase<T>={
        setTypedValue(value:T):void
    }
    type TypedControl<T>=TypedControlBase<T> & HTMLElement;
    function adaptElement<T>(control:TypedControl<T>, typeInfo:any):void
}