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


    function myOwn():void
    namespace myOwn{
        interface ClientSideDefinition{
            update?:true|((depot:Depot, fieldName:string)=>void)
            prepare:(depot:Depot, fieldName:string)=>void
        }
    
        interface ClientSides{
            [key:string]:ClientSideDefinition
        }
        interface Depot{
            rowControls:{[key:string]:HTMLElement}
        }
        var wScreens:WScreens
        var clientSides:ClientSides
    }
    export = myOwn
}
