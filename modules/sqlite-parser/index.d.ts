declare module 'sqlite-parser' {
    
    function sqliteParser(expression: string): sqliteParser.ParsedObject

    namespace sqliteParser {
        // type Operation = '+'|'-'|'*'|'/'

        type dataType = 'text' | 'decimal' | 'boolean' | 'date' | 'datetime';

        interface BaseNode {
            type: string,
        }

        interface IdentifierNode extends BaseNode {
            type: 'identifier'
            name: string
        }

        interface LiteralNode extends BaseNode {
            type: 'literal'
            value: string
            variant: dataType
        }
        // interface ArgsExpressionNode extends ExpressionNode {
        //     expression: BaseNode[]
        // }
        interface FunctionNode extends BaseNode {
            type: 'function'
            name: IdentifierNode
            args: {expression: BaseNode[]}
        }

        interface ExpressionNode extends BaseNode {
            type: 'expression'
            format: 'binary'|'unary'
        }

        interface BinaryExpressionNode extends ExpressionNode {
            format: 'binary'
            operation: string
            left: BaseNode
            right: BaseNode
        }

        interface UnaryExpressionNode extends ExpressionNode {
            format: 'unary'
            operator: string
            expression: BaseNode
        }

        type ParsedObject = {
            type: "statement",
            variant: "list",
            statement: [
                {
                    type: "statement",
                    variant: "select",
                    result: BaseNode[]
                }
            ]
        };  
    }
    export = sqliteParser
}