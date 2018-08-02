declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                abstract class AbstractParser {
                    protected source: jdk.nashorn.internal.runtime.Source
                    protected errors: jdk.nashorn.internal.runtime.ErrorManager
                    protected stream: jdk.nashorn.internal.parser.TokenStream
                    protected k: int
                    protected previousToken: long
                    protected token: long
                    protected type: jdk.nashorn.internal.parser.TokenType
                    protected last: jdk.nashorn.internal.parser.TokenType
                    protected start: int
                    protected finish: int
                    protected line: int
                    protected linePosition: int
                    protected lexer: jdk.nashorn.internal.parser.Lexer
                    protected isStrictMode: boolean
                    protected lineOffset: int
                    protected constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: boolean, arg3: int)
                    protected getToken(arg0: int): long
                    protected T(arg0: int): jdk.nashorn.internal.parser.TokenType
                    protected next(): jdk.nashorn.internal.parser.TokenType
                    protected nextOrEOL(): jdk.nashorn.internal.parser.TokenType
                    protected static message(arg0: java.lang.String | string, ...arg1: java.lang.String[]): string
                    protected error(arg0: java.lang.String | string, arg1: long): jdk.nashorn.internal.runtime.ParserException
                    protected error(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: java.lang.String | string, arg2: long): jdk.nashorn.internal.runtime.ParserException
                    protected error(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ParserException
                    protected error(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: java.lang.String | string): jdk.nashorn.internal.runtime.ParserException
                    protected warning(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: java.lang.String | string, arg2: long): void
                    protected expectMessage(arg0: jdk.nashorn.internal.parser.TokenType): string
                    protected expect(arg0: jdk.nashorn.internal.parser.TokenType): void
                    protected expectDontAdvance(arg0: jdk.nashorn.internal.parser.TokenType): void
                    protected expectValue(arg0: jdk.nashorn.internal.parser.TokenType): java.lang.Object
                    protected getValue(): java.lang.Object
                    protected getValue(arg0: long): java.lang.Object
                    protected isNonStrictModeIdent(): boolean
                    protected getIdent(): jdk.nashorn.internal.ir.IdentNode
                    protected createIdentNode(arg0: long, arg1: int, arg2: java.lang.String | string): jdk.nashorn.internal.ir.IdentNode
                    protected isIdentifierName(): boolean
                    protected getIdentifierName(): jdk.nashorn.internal.ir.IdentNode
                    protected getLiteral(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}