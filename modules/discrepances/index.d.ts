declare module 'discrepances'{
    function showAndThrow<T>(obtained:T, expected:T):void
    function nestedObject<T>(obtained:T, expected:T):object
    function flatten     <T>(obtained:T, expected:T):object
}

