/* How to import:
 *
 * /// <reference path="../node_modules/types.d.ts/modules/codenautas-umd/index.d.ts" />
 *
 */

declare function define(factory:()=>any):void;
declare namespace define{
    const amd:true
}

// @ts-ignore
declare var exports:{
    [key:string]:()=>void
}


