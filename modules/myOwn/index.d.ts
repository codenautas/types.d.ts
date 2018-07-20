
declare module "myOwn" {

    function myOwn(): void
    namespace myOwn {
        var firstDisplayCount:number
        var i18n:any

        interface AddrParams {
            w?: 'menu' | 'table' | 'proc' | 'path' | 'function'
            i?: string
            name?: string
            proc?: string
            path?: string
            pageTitle?: string
            title?: string
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
            rowControls: { [key: string]: HTMLElement }
            row: { [key: string]: any }
            manager: TableGrid
        }
        
        interface ProcedureParameters {
            [key:string]:string | number
        }

        interface AttrFunc {
            [key: string]: (params:ProcedureParameters) => any | {[key: string]: AttrFunc}
        } 
        interface MyAjax {
            tables: (()=> void)[]
            [key: string]: AttrFunc
        } // ajax = {tabla_datos: {generar: ()=>any}} // return ajax.tabla_datos.generar
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
        function createForkeableButton(object: object): HTMLButtonElement
    }
    export = myOwn
}

