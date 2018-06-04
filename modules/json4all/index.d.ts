declare module "json4all"{
    namespace json4all{
        function parse<T>(jsonText:string):T
        function stringify(object:any):string
    }
    export = json4all
}
