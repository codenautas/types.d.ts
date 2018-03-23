declare module 'backend-plus'{
    import * as express from "express";

    interface ProcedureDef{

    }
    interface MenuInfoBase{
        menuType:string // 'menu'|'table'|'proc'
        name:string
        label?:string
    }
    interface MenuInfoMenu extends MenuInfoBase{
        menuType:'menu'
        content:MenuInfo[]
    }
    interface MenuInfoTable extends MenuInfoBase{
        menuType:'table'
        table?:string
    }
    interface MenuInfoProc extends MenuInfoBase{
        menuType:'proc'
    }
    type MenuInfo = MenuInfoBase; // MenuInfoMenu | MenuInfoTable | MenuInfoProc;

    class AppBackend{
        app:express.Express
        start():Promise<void>
        getTables():string[]
        addLoggedServices():void
        getProcedures():Promise<ProcedureDef[]>
        getMenu(context?:{}):{menu:MenuInfo[]}
    }
}
