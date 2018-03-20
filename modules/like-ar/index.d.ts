declare module "like-ar"{
    type ObjectWithArrayFunctions={
        forEach:( callback:(value:any, key:string)=>void ) => ObjectWithArrayFunctions
        map    :( callback:(value:any, key:string)=>any  ) => ObjectWithArrayFunctions
    }
    function likeAr(o:object):ObjectWithArrayFunctions
    namespace likeAr{}
    export = likeAr
}
