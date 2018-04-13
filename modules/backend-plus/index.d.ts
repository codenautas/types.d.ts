declare module 'backend-plus'{
    import * as express from "express";
    import * as pg from "pg-promise-strict";

    interface ProcedureDef{

    }
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
    } & MenuInfoBase;
    type Context={
        be:AppBackend, user:object, session:object, 
        username:string, machineId:string, 
        navigator:string
    }
    interface Request extends express.Request{
        user:{[key:string]:any}
        session:{[key:string]:any}
    }
    interface Response extends express.Response{}
    // type MenuInfo = MenuInfoBase; // MenuInfoMenu | MenuInfoTable | MenuInfoProc;
    type MenuInfo = MenuInfoMenu | MenuInfoTable | MenuInfoProc;
    type MenuDefinition = {menu:MenuInfo[]}
    function require_resolve(moduleName:string):string
    class AppBackend{
        app:express.Express
        start():Promise<void>
        getTables():string[]
        getContext(req:Request):Context
        clientIncludes(req:Request, hideBEPlusInclusions?:boolean):ClientModuleDefinition[]
        addLoggedServices():void
        getProcedures():Promise<ProcedureDef[]>
        getMenu(context?:{}):{menu:MenuInfoBase[]}
        inTransaction<T>(context:Request|null, doThisWithDbTransaction:(client:pg.Client)=>Promise<T>):Promise<T>
        procedureDefCompleter(procedureDef:ProcedureDef):ProcedureDef
    }
}
