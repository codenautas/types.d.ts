declare module "best-globals"{
    namespace bestGlobals{
        function serie(length:number):number[]
        function serie(first:number, length:number):number[]
        function changing<T extends {}, T2 extends {}>(origin:T, changes:T2):T & T2
        function sleep(ms:number):Promise<void>
    }
    export = bestGlobals
}
