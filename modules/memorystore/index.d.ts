declare module 'memorystore' {
    function memorystore(session:any):typeof memorystore.MemoryStore
    namespace memorystore{
        type MemoryConsOpts={
            checkPeriod?:number
            max?:number
            ttl?:number
            dispose:(key:string, value:any)=>void
            stale?:number
            // serializer:typeof JSON
        }
        class MemoryStore{
            constructor(opts:MemoryConsOpts)
            store:{
                load(content:any):void
                dump():any
            }
        }
    }
    export = memorystore
}