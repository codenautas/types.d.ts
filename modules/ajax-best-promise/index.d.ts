declare module "ajax-best-promise"{
    namespace AjaxBestPromise{
        type RequestParams<D extends {}>={
            url:string
            data:D
            uploading?:(event:any)=>any
            multipart?:boolean
        }
        type ResultForPromise<T>=Promise<T>|T|void
        type TheneableResult<R>={
            then<T>(cb:(result:R)=>ResultForPromise<T>, cbe?:(err:Error)=>ResultForPromise<T>):Promise<T>
            catch<T>(cbe:(err:Error)=>ResultForPromise<T>):Promise<T>
            onChunk<T>(cb:(partialText:string)=>ResultForPromise<T>):Promise<T>
            onLine<T>(cb:(line:string)=>ResultForPromise<T>):Promise<T>
        }
        function get<TD,TR>(req:RequestParams<TD>):TheneableResult<TR>
        function post<TD,TR>(req:RequestParams<TD>):TheneableResult<TR>
    }
    export = AjaxBestPromise
}
