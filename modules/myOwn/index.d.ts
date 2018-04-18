declare module "myOwn"{

    function myOwn():void
    namespace myOwn{
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
        interface ClientSideDefinition{
            update?:true|((depot:Depot, fieldName:string)=>void)
            prepare:(depot:Depot, fieldName:string)=>void
        }
        interface ClientSides{
            [key:string]:ClientSideDefinition
        }
        interface Depot{
            rowControls:{[key:string]:HTMLElement}
            row:{[key:string]:any}
        }
        var wScreens:WScreens
        var clientSides:ClientSides
        var path:{
            img:string
        }
        function getRect(control:HTMLElement):{
            top:number,
            left:number
        }
        function createForkeableButton(object:object):HTMLButtonElement
    }
    export = myOwn
}
