declare module "pg-promise-strict"{
    var easy:boolean
    type ConnectParams={
        motor?:string
        database?:string
        user?:string
        password?:string
        port?:string
    }
    type Client={
        executeSqlScript(fileName:string):Promise<void>
        query(queryString:string, params?:any[]):{
            fetchUniqueValue():Promise<any>
        }
        done():void
    }
    function connect(opts:ConnectParams):Client
}

