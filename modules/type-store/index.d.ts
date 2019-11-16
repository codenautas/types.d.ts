declare module 'type-store' {
    type TypeInfo={
        typeName:'text'|'number'|'integer'|'bigint'|'double'|'boolean'|'date'|'timestamp'|'interval'
        nullable?:boolean
        acceptedChars?:RegExp
        postInput?:string
    }|{
        typeName:'text'
        allowEmptyText?:boolean
        toUpperWithoutDiacritics?:boolean
    }|{
        typeName:'interval'
        timeUnit?:string
    }
    type TypeBase<T>={
        toHtmlText():string
        toHtml(value:T):HtmlBase
    }
    function typerFrom(typeInfo:{typeName:'date'}&TypeInfo):TypeBase<Date>
}