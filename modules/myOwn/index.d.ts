declare module "myOwn"{

    interface AddrParams{
        w?:'menu'|'table'|'proc'|'path'|'function'
        i?:string
        name?:string
        proc?:string
        path?:string
        pageTitle?:string
        title?:string
    }

    interface WScreens{
        [key:string]:(addrParams:AddrParams)=>void
    }

    interface Depot{
        x:boolean
    }

    interface ClientSideDefinition{
        update?:true|((depot:Depot, fieldName:string)=>void)
        prepare:(depot:Depot, fieldName:string)=>void
    }

    interface ClientSides{
        [key:string]:ClientSideDefinition
    }

    function myOwn():void
    namespace myOwn{
        var wScreens:WScreens
        var clientSides:ClientSides
    }
    export = myOwn
}
