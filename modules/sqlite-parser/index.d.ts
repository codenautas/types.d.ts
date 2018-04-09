declare module 'sqlite-parser' {
    
    function sqliteParser(expression: string): sqliteParser.ParsedObject

    namespace sqliteParser {
        // type Operation = '+'|'-'|'*'|'/'

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
            variant: 'decimal' | 'text'
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
            operation: string
            format: 'binary'|'unary'
        }

        interface BinaryExpressionNode extends ExpressionNode {
            format: 'binary'
            left: BaseNode
            right: BaseNode
        }

        interface UnaryExpressionNode extends ExpressionNode {
            format: 'unary'
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