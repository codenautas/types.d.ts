declare module "json4all"{
    namespace json4all{
        type AddTypeFunctions={
            construct:<T>(value:object)=>T
            deconstruct?:<T>(object:T)=>object
            specialTag?:<T>(object:T)=>string
        }
        function parse<T>(jsonText:string):T
        function stringify(object:any):string
        function addType(className:string, functions:AddTypeFunctions, skipIfExists?:boolean):void
        function addType(constructor:Function, functions?:AddTypeFunctions, skipIfExists?:boolean):void
    }
    export = json4all
}
