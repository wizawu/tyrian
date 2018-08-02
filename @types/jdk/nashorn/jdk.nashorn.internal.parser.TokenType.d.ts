declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class TokenType extends java.lang.Enum<jdk.nashorn.internal.parser.TokenType> {
                    public static ERROR: jdk.nashorn.internal.parser.TokenType
                    public static EOF: jdk.nashorn.internal.parser.TokenType
                    public static EOL: jdk.nashorn.internal.parser.TokenType
                    public static COMMENT: jdk.nashorn.internal.parser.TokenType
                    public static DIRECTIVE_COMMENT: jdk.nashorn.internal.parser.TokenType
                    public static NOT: jdk.nashorn.internal.parser.TokenType
                    public static NE: jdk.nashorn.internal.parser.TokenType
                    public static NE_STRICT: jdk.nashorn.internal.parser.TokenType
                    public static MOD: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_MOD: jdk.nashorn.internal.parser.TokenType
                    public static BIT_AND: jdk.nashorn.internal.parser.TokenType
                    public static AND: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_BIT_AND: jdk.nashorn.internal.parser.TokenType
                    public static LPAREN: jdk.nashorn.internal.parser.TokenType
                    public static RPAREN: jdk.nashorn.internal.parser.TokenType
                    public static MUL: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_MUL: jdk.nashorn.internal.parser.TokenType
                    public static ADD: jdk.nashorn.internal.parser.TokenType
                    public static INCPREFIX: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_ADD: jdk.nashorn.internal.parser.TokenType
                    public static COMMARIGHT: jdk.nashorn.internal.parser.TokenType
                    public static SUB: jdk.nashorn.internal.parser.TokenType
                    public static DECPREFIX: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SUB: jdk.nashorn.internal.parser.TokenType
                    public static PERIOD: jdk.nashorn.internal.parser.TokenType
                    public static DIV: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_DIV: jdk.nashorn.internal.parser.TokenType
                    public static COLON: jdk.nashorn.internal.parser.TokenType
                    public static SEMICOLON: jdk.nashorn.internal.parser.TokenType
                    public static LT: jdk.nashorn.internal.parser.TokenType
                    public static SHL: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SHL: jdk.nashorn.internal.parser.TokenType
                    public static LE: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN: jdk.nashorn.internal.parser.TokenType
                    public static EQ: jdk.nashorn.internal.parser.TokenType
                    public static EQ_STRICT: jdk.nashorn.internal.parser.TokenType
                    public static BIND: jdk.nashorn.internal.parser.TokenType
                    public static GT: jdk.nashorn.internal.parser.TokenType
                    public static GE: jdk.nashorn.internal.parser.TokenType
                    public static SAR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SAR: jdk.nashorn.internal.parser.TokenType
                    public static SHR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SHR: jdk.nashorn.internal.parser.TokenType
                    public static TERNARY: jdk.nashorn.internal.parser.TokenType
                    public static LBRACKET: jdk.nashorn.internal.parser.TokenType
                    public static RBRACKET: jdk.nashorn.internal.parser.TokenType
                    public static BIT_XOR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_BIT_XOR: jdk.nashorn.internal.parser.TokenType
                    public static LBRACE: jdk.nashorn.internal.parser.TokenType
                    public static BIT_OR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_BIT_OR: jdk.nashorn.internal.parser.TokenType
                    public static OR: jdk.nashorn.internal.parser.TokenType
                    public static RBRACE: jdk.nashorn.internal.parser.TokenType
                    public static BIT_NOT: jdk.nashorn.internal.parser.TokenType
                    public static BREAK: jdk.nashorn.internal.parser.TokenType
                    public static CASE: jdk.nashorn.internal.parser.TokenType
                    public static CATCH: jdk.nashorn.internal.parser.TokenType
                    public static CLASS: jdk.nashorn.internal.parser.TokenType
                    public static CONST: jdk.nashorn.internal.parser.TokenType
                    public static CONTINUE: jdk.nashorn.internal.parser.TokenType
                    public static DEBUGGER: jdk.nashorn.internal.parser.TokenType
                    public static DEFAULT: jdk.nashorn.internal.parser.TokenType
                    public static DELETE: jdk.nashorn.internal.parser.TokenType
                    public static DO: jdk.nashorn.internal.parser.TokenType
                    public static ELSE: jdk.nashorn.internal.parser.TokenType
                    public static ENUM: jdk.nashorn.internal.parser.TokenType
                    public static EXPORT: jdk.nashorn.internal.parser.TokenType
                    public static EXTENDS: jdk.nashorn.internal.parser.TokenType
                    public static FALSE: jdk.nashorn.internal.parser.TokenType
                    public static FINALLY: jdk.nashorn.internal.parser.TokenType
                    public static FOR: jdk.nashorn.internal.parser.TokenType
                    public static FUNCTION: jdk.nashorn.internal.parser.TokenType
                    public static IF: jdk.nashorn.internal.parser.TokenType
                    public static IMPLEMENTS: jdk.nashorn.internal.parser.TokenType
                    public static IMPORT: jdk.nashorn.internal.parser.TokenType
                    public static IN: jdk.nashorn.internal.parser.TokenType
                    public static INSTANCEOF: jdk.nashorn.internal.parser.TokenType
                    public static INTERFACE: jdk.nashorn.internal.parser.TokenType
                    public static LET: jdk.nashorn.internal.parser.TokenType
                    public static NEW: jdk.nashorn.internal.parser.TokenType
                    public static NULL: jdk.nashorn.internal.parser.TokenType
                    public static PACKAGE: jdk.nashorn.internal.parser.TokenType
                    public static PRIVATE: jdk.nashorn.internal.parser.TokenType
                    public static PROTECTED: jdk.nashorn.internal.parser.TokenType
                    public static PUBLIC: jdk.nashorn.internal.parser.TokenType
                    public static RETURN: jdk.nashorn.internal.parser.TokenType
                    public static STATIC: jdk.nashorn.internal.parser.TokenType
                    public static SUPER: jdk.nashorn.internal.parser.TokenType
                    public static SWITCH: jdk.nashorn.internal.parser.TokenType
                    public static THIS: jdk.nashorn.internal.parser.TokenType
                    public static THROW: jdk.nashorn.internal.parser.TokenType
                    public static TRUE: jdk.nashorn.internal.parser.TokenType
                    public static TRY: jdk.nashorn.internal.parser.TokenType
                    public static TYPEOF: jdk.nashorn.internal.parser.TokenType
                    public static VAR: jdk.nashorn.internal.parser.TokenType
                    public static VOID: jdk.nashorn.internal.parser.TokenType
                    public static WHILE: jdk.nashorn.internal.parser.TokenType
                    public static WITH: jdk.nashorn.internal.parser.TokenType
                    public static YIELD: jdk.nashorn.internal.parser.TokenType
                    public static DECIMAL: jdk.nashorn.internal.parser.TokenType
                    public static OCTAL: jdk.nashorn.internal.parser.TokenType
                    public static HEXADECIMAL: jdk.nashorn.internal.parser.TokenType
                    public static FLOATING: jdk.nashorn.internal.parser.TokenType
                    public static STRING: jdk.nashorn.internal.parser.TokenType
                    public static ESCSTRING: jdk.nashorn.internal.parser.TokenType
                    public static EXECSTRING: jdk.nashorn.internal.parser.TokenType
                    public static IDENT: jdk.nashorn.internal.parser.TokenType
                    public static REGEX: jdk.nashorn.internal.parser.TokenType
                    public static XML: jdk.nashorn.internal.parser.TokenType
                    public static OBJECT: jdk.nashorn.internal.parser.TokenType
                    public static ARRAY: jdk.nashorn.internal.parser.TokenType
                    public static COMMALEFT: jdk.nashorn.internal.parser.TokenType
                    public static DECPOSTFIX: jdk.nashorn.internal.parser.TokenType
                    public static INCPOSTFIX: jdk.nashorn.internal.parser.TokenType
                    public static values(): jdk.nashorn.internal.parser.TokenType[]
                    public static valueOf(arg0: java.lang.String | string): jdk.nashorn.internal.parser.TokenType
                    public needsParens(arg0: jdk.nashorn.internal.parser.TokenType, arg1: boolean): boolean
                    public isOperator(arg0: boolean): boolean
                    public getLength(): int
                    public getName(): string
                    public getNameOrType(): string
                    public getNext(): jdk.nashorn.internal.parser.TokenType
                    public setNext(arg0: jdk.nashorn.internal.parser.TokenType): void
                    public getKind(): jdk.nashorn.internal.parser.TokenKind
                    public getPrecedence(): int
                    public isLeftAssociative(): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}