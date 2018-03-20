declare module 'backend-plus'{
    class AppBackend{
        start():Promise<void>
        getTables():string[]
    }
}
