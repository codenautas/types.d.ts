declare module 'backend-plus'{
    import * as express from "express";
    import * as pg from "pg-promise-strict";

    interface ProcedureDef{

    }
    type Context={
        be:AppBackend, user:object, session:object, 
        username:string, machineId:string, 
        navigator:string
    }
    type ProcedureContext=Context & {
        client:pg.Client
    }
    interface Request extends express.Request{
        user:{[key:string]:any}
        session:{[key:string]:any}
    }
    interface Response extends express.Response{}
    interface Express extends express.Express{}
    function require_resolve(moduleName:string):string
    // type MenuInfo = MenuInfoBase; // MenuInfoMenu | MenuInfoTable | MenuInfoProc;
    // types for Menu definitions
    type MenuInfoBase={
        menuType:string // 'menu'|'table'|'proc'
        name:string
        label?:string
    }
    type MenuInfoMenu = {
        menuType:'menu'
        menuContent:MenuInfo[]
    } & MenuInfoBase;
    type MenuInfoTable = {
        menuType:'table'
        table?:string
    } & MenuInfoBase;
    interface ClientModuleDefinition{
        type:'js'|'css'
        module?:string
        src?:string
        path?:string
        modPath?:string
        file?:string
    }
    type MenuInfoProc={
        menuType:'proc'
        proc?:string
    } & MenuInfoBase;
    type MenuInfo = MenuInfoMenu | MenuInfoTable | MenuInfoProc;
    type MenuDefinition = {menu:MenuInfo[]}
    // types for Table definitions
    export interface TableContext extends Context{
        puede:object
        superuser?:true
        forDump?:boolean
        user:{
            usuario:string
            rol:string
        }
    }
    export type FieldDefinition = EditableDbDefinition & {
        name:string
        typeName:'decimal'|'text'|'boolean'|'integer'|'date'|'interval'
        label?:string
        title?:string
        nullable?:boolean
        defaultValue?:any
        clientSide?:string
    }
    export type EditableDbDefinition = {
        editable?:boolean
        allow?:{
            update?:boolean
            insert?:boolean
            delete?:boolean
            select?:boolean
        }
    }
    export type TableDefinition = EditableDbDefinition & {
        name:string
        elementName?:string
        tableName?:string
        title?:string
        fields:FieldDefinition[],
        primaryKey:string[],
        sql?:{
            where?:string
        }
    }
    type TableItemDef=string|{name:string}&({tableGenerator:(context:TableContext)=>TableDefinition})
    class AppBackend{
        app:express.Express
        db:typeof pg
        start():Promise<void>
        getTables():TableItemDef[]
        getContext(req:Request):Context
        clientIncludes(req:Request, hideBEPlusInclusions?:boolean):ClientModuleDefinition[]
        addSchrödingerServices(mainApp:express.Express, baseUrl:string):void
        addLoggedServices():void
        getProcedures():Promise<ProcedureDef[]>
        getMenu(context?:{}):{menu:MenuInfoBase[]}
        inDbClient<T>(req:Request|null, doThisWithDbClient:(client:pg.Client)=>Promise<T>):Promise<T>
        inTransaction<T>(req:Request|null, doThisWithDbTransaction:(client:pg.Client)=>Promise<T>):Promise<T>
        procedureDefCompleter(procedureDef:ProcedureDef):ProcedureDef
        tableDefAdapt(tableDef:TableDefinition, context:Context):TableDefinition
    }
}
