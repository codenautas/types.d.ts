declare module "json4all"{
    namespace json4all{
        function parse(jsonText:string):any
        function stringify(object:any):string
    }
    export = json4all
}
