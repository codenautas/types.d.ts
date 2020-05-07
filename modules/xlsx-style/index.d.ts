declare module 'xlsx-style' {
    type StringAddres = "a1"|"a2"|"a3"|"b1"|"b2"|"b3"
    type Cell = {v:any}
    type Range = {e:{c:number, r:number}}
    type EncodedRange = {$DonTLookInside:true}
    type WorkItem = {$DonTLookInside:true}
    type WorkBook = {
        SheetNames: string[]
        Sheets: {[k:string]:WorkSheet}
    };
    type WorkSheet = {
        "!ref": EncodedRange
    } & {
        [k in StringAddres]: Cell
    }
    function read(content:Buffer):WorkBook
    var utils: {
        decode_range: (item:EncodedRange) => Range
        encode_cell: (address:{r:number, c:number}) => StringAddres
    }
}