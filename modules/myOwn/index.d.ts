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
            up?: Record<string, any>
            ff?: Record<string, any>
        }
        interface ResultManager {
            showText(result:any, divResult:HTMLDivElement):void
            showError(err:Error, divResult:HTMLDivElement):void
        }
        type WScreen = ((addrParams: AddrParams) => Promise<void>) | {
            parameters: {name:string, typeName:string, description?:string, defaultValue?:any, references?:string}[],
            mainAction: (params:any, divResult:HTMLDivElement)=>void
            autoproced?:boolean
        }
        interface WScreens {
            proc: ((addrParams: AddrParams) => Promise<void>) & {result:{
                [key:string]: (result:any, divResult:HTMLDivElement)=>void
            }}
            [key: string]: WScreen
        }
        interface ClientSideDefinition {
            update?: true | ((depot: Depot, fieldName: string) => void)
            prepare: (depot: Depot, fieldName: string) => void
        }
        interface ClientSides {
            [key: string]: ClientSideDefinition
        }
        interface FilterNode {column:string, operator:string, value:any}
        interface DepotFilter extends Depot { rowOperator:any[] } 
        interface TableGridView{
            filter?: DepotFilter[]
        }
        interface TableGrid{
            dom: {main: HTMLElement, aggregate: {[key:string]: HTMLElement} }
            grid: {
                [key:string]: any
                modes: {saveByField: boolean, withColumnDetails: any[] }//FieldDefinition[]} // debería ser FieldDefinition pero ese tipo está declarado en BEPlus y esto (myOwn) está en types.d.ts/modules/myOwn
                view: TableGridView
                depotRefresh: (depot:Depot, result:any, opts:{noDispatchEvents:boolean}) => void
                createRowInsertElements: (aboveDepot?:Depot, belowDepot?:Depot) => any
            }
            retrieveRowAndRefresh: (depot: Depot, opts?:{noDispatchEvents:true}) => Promise<void>
            waitForReady:(fun?:Function) => Promise<TableGrid>
            depots:Depot[]
            connector:{
                opts?:{
                    parentDepot: Depot
                }
            }
            view: TableGridView
            // For filter:
            createRowFilter: (lineNumber:number, filterNode:FitlerNode[]) => DepotFilter
            updateFilterInfo: (infoLabel:string) => void
            displayBody: () => void
        }

        interface TableDef{
            layout?:{errorList?:boolean}
            hiddenColumns?:string[]
            title?:string
            name?:string
            filterColumns?:FilterNode[]
            detailTables?:{table:string, fields:({source:string, target:string}|string)[],abr:string}[]
            allow?:{delete?:boolean, insert?:boolean, update?:boolean},
            firstDisplayCount?:number, 
            firstDisplayOverLimit?:number
        }

        interface Depot {
            def: TableDef
            rowControls: { [key: string]: TypedControl<any> }
            row: { [key: string]: any }
            manager: TableGrid
            primaryKeyValues: any[]
            detailControls: Record<string, {
                img:HTMLIFrameElement
                displayDetailGrid:(opts:{})=>void
                forceDisplayDetailGrid:(opts:{})=>void
                refreshAllRowsInGrid:(force:boolean)=>void
                show:boolean
            }>
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
            left: number,
            width: number,
            height: number
        }
        function gotoAddrParams(adrrParams:AddrParams):void
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
            acceptPhotos?:boolean,
            optsNames?:string[] // bool options to add in ajaxParams 
        ):{img:string, value:true, label:string, doneFun: ()=>void}|void
        function alertError(err:Error):Promise<void>
        var config:{
            config:{
                "background-img":string
                devel:boolean
            },
            tableData:Record<string/*tableName*/,Record<string/*Pk.Json*/,Record<string/*fieldName*/,any>>>
            offline:{
                mode:string
            }
        }
        function showPage():void
        var autoSetupFunctions:(()=>(void|Promise<void>))[]
        var offline:{
            mode:string
        }
        function getReference(tableName:string):{
            dataReady:Promise<any[]>
        }
        function tableGrid(tableName:string, mainElement:HTMLElement, opts:{
            detailingForUrl?:any
            detailingPath?:any
            detailing?:object
            fixedFields?:{fieldName:string, value:any}[]
            tableDef?:TableDef
        }):TableGrid
        var cache:{ // app cache 
            [key:string]: any 
        }
        var validators: Record<string, {
            getMandatoryMap(row:Record<string, any>):Record<string, any>
        }>
        var conditions: Record<string, (depot:Depot)=>boolean>
        var ready:Promise<void>
        function getReference(tableName:string):{
            dataReady:Promise<any[]>
        }
        function getAppPrefix():string
        function getLocalVar(varName:string):any
        function setLocalVar(varName:string, value:any):void
        function existsLocalVar(varName:string):boolean
        function removeLocalVar(varName:string):void
        function getSessionVar(varName:string):any
        function setSessionVar(varName:string, value:any):void
        function existsSessionlVar(varName:string):boolean
        function removeSessionVar(varName:string):void
        function UriSearchToObject(queryOrHashString:string):Record<string,any>
        function replaceAddrParams(addrParams:AddrParams):void
        var skipInFixedFields: Symbol // special value for row as "any detail"
    }

    declare var my:typeof myOwn