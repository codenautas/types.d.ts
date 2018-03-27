declare module 'backend-plus'{
    import * as express from "express";

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
    type MenuInfoProc={
        menuType:'proc'
    } & MenuInfoBase;
    // type MenuInfo = MenuInfoBase; // MenuInfoMenu | MenuInfoTable | MenuInfoProc;
    type MenuInfo = MenuInfoMenu | MenuInfoTable | MenuInfoProc;
    type MenuDefinition = {menu:MenuInfo[]}
    class AppBackend{
        app:express.Express
        start():Promise<void>
        getTables():string[]
        addLoggedServices():void
        getProcedures():Promise<ProcedureDef[]>
        getMenu(context?:{}):MenuDefinition
    }
}
