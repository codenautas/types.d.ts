    // import { TypedControlBase, TypedControl } from "typed-controls";
    declare function myOwn(): void
    declare namespace myOwn {
        var firstDisplayCount:number
        var i18n:{es?:{[key:string]:string}, en?:{[key:string]:string}}
        var messages:{[key:string]:string}

        interface AddrParams {
            w?: 'menu' | 'table' | 'proc' | 'path' | 'function'
            i?: string
            name?: string
            proc?: string
            path?: string
            pageTitle?: string
            title?: string
            table?: string
        }
        interface WScreens {
            [key: string]: (addrParams: AddrParams) => void
        }
        interface ClientSideDefinition {
            update?: true | ((depot: Depot, fieldName: string) => void)
            prepare: (depot: Depot, fieldName: string) => void
        }
        interface ClientSides {
            [key: string]: ClientSideDefinition
        }

        interface TableGrid{
            grid: {
                [key:string]: any
                dom: {main: HTMLElement, aggregate: {[key:string]: HTMLElement} }
                modes: {saveByField: boolean, withColumnDetails: any[] }//FieldDefinition[]} // debería ser FieldDefinition pero ese tipo está declarado en BEPlus y esto (myOwn) está en types.d.ts/modules/myOwn
                view: any
            }
            retrieveRowAndRefresh: (depot: Depot) => Promise<void>
        }

        interface Depot {
            rowControls: { [key: string]: TypedControl<any> }
            row: { [key: string]: any }
            manager: TableGrid
            primaryKeyValues: any[]
        }
        
        interface ProcedureParameters {
            [key:string]:any
        }
        type ProgressPacket = {loaded:number; total: number; lengthComputable:boolean}
        interface ProcedureOpts {
            uploading: (progress:ProgressPacket)=>void
        }
        type AttrFunc=(params?:ProcedureParameters,opts?:{}) => Promise<any>
        type MyAjax={
            [key: string]: AttrFunc
        };
        var wScreens: WScreens
        var clientSides: ClientSides
        var path: {
            img: string
        }
        var ajax: MyAjax

        function getRect(control: HTMLElement): {
            top: number,
            left: number
        }
        function createForkeableButton(addrParams: AddrParams, opts:string|{label:string, class?:string, onclick?:(event?:Event)=>any, updateHrefBeforeClick?:(event?:Event)=>any}): HTMLButtonElement
        function createSmartButton(opts:{
            buttonLabel?:string,
            confirmMessage?:string,
            mainFun:(opts:any)=>Promise<void>,
            insideElement?:HTMLElement,
            initialState?:'active'
        }): HTMLButtonElement
        function dialogUpload<T extends object>(
            ajaxPath:string|string[],
            ajaxParams:T,
            ajaxPrepareResultFun:(result:any)=>any, 
            showWithMiniMenu:boolean, 
            messages:{[keyof:string]:string}, 
            refresheable?:{refresh:()=>void}, 
            acceptPhotos?:boolean
        ):{img:string, value:true, label:string, doneFun: ()=>void}|void
        function alertError(err:Error):Promise<void>
        var config:{
            config:{
                "background-img":string
            }
        }
        function showPage():void
    }

    declare var my:typeof myOwn