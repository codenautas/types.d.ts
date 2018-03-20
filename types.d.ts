declare module 'discrepances'{
    function showAndThrow(obtained:any, expected:any):void
}

declare module "like-ar"{
    type ObjectWithArrayFunctions={
        forEach:( callback:(value:any, key:string)=>void ) => ObjectWithArrayFunctions
        map    :( callback:(value:any, key:string)=>any  ) => ObjectWithArrayFunctions
    }
    function likeAr(o:object):ObjectWithArrayFunctions
    namespace likeAr{}
    export = likeAr
}

declare module "pg-promise-strict"{
    var easy:boolean
    type ConnectParams={
        motor?:string
        database?:string
        user?:string
        password?:string
        port?:string
    }
    type Client={
        executeSqlScript(fileName:string):Promise<void>
        query(queryString:string, params?:any[]):{
            fetchUniqueValue():Promise<any>
        }
    }
    function connect(opts:ConnectParams):Client
}

/*
declare module 'js-to-html'{
    interface TypedElement{
        disable(disabled:boolean)
        setTypedValue(any:any, originatedFromUserInteraction?:boolean)
        getTypedValue():any
    }
    interface ExtendedHTMLElement              extends HTMLElement              ,TypedElement{}
    interface ExtendedHTMLButtonElement        extends HTMLButtonElement        ,TypedElement{}
    interface ExtendedHTMLTableElement         extends HTMLTableElement         ,TypedElement{}
    interface ExtendedHTMLTableRowElement      extends HTMLTableRowElement      ,TypedElement{}
    interface ExtendedHTMLTableDataCellElement extends HTMLTableDataCellElement ,TypedElement{}
    var html:{
        td: (attrOrContent?:object|any[]|string, content?:any[]|string ) => {
            create():ExtendedHTMLTableDataCellElement
        }
        tr: (attrOrContent?:object|any[]|string, content?:any[]|string ) => {
            create():ExtendedHTMLTableRowElement
        }
        table: (attrOrContent?:object|any[]|string, content?:any[]|string ) => {
            create():ExtendedHTMLTableElement
        }
        button: (attrOrContent?:object|any[]|string, content?:any[]|string ) => {
            create():ExtendedHTMLButtonElement
        }
        [key:string]: (attrOrContent?:object|any[]|string, content?:any[]|string ) => {
            create():ExtendedHTMLElement
        },
    }
    type HtmlAttrs={
        colspan?:number,
    }
}
*/

declare module 'backend-plus'{
    class AppBackend{
        start()
        getTables():string[]
    }
}
