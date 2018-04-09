declare module "like-ar"{
    type ObjectWithArrayFunctions={
        forEach:( callback:(value:any, key:string)=>void ) => ObjectWithArrayFunctions
        map    :( callback:(value:any, key:string)=>any  ) => ObjectWithArrayFunctions
        filter :( callback:(value:any, key:string)=>any  ) => ObjectWithArrayFunctions
        keys   :() => string[]
        array  :() => any[]
        plain  :() => object
        join   :(separator:string) => string
    }
    function likeAr(o:object):ObjectWithArrayFunctions
    namespace likeAr{}
    export = likeAr
}
