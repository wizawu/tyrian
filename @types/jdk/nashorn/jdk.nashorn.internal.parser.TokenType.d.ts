declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class TokenType extends java.lang.Enum<jdk.nashorn.internal.parser.TokenType> {
                    public static readonly ERROR: jdk.nashorn.internal.parser.TokenType
                    public static readonly EOF: jdk.nashorn.internal.parser.TokenType
                    public static readonly EOL: jdk.nashorn.internal.parser.TokenType
                    public static readonly COMMENT: jdk.nashorn.internal.parser.TokenType
                    public static readonly DIRECTIVE_COMMENT: jdk.nashorn.internal.parser.TokenType
                    public static readonly NOT: jdk.nashorn.internal.parser.TokenType
                    public static readonly NE: jdk.nashorn.internal.parser.TokenType
                    public static readonly NE_STRICT: jdk.nashorn.internal.parser.TokenType
                    public static readonly MOD: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_MOD: jdk.nashorn.internal.parser.TokenType
                    public static readonly BIT_AND: jdk.nashorn.internal.parser.TokenType
                    public static readonly AND: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_BIT_AND: jdk.nashorn.internal.parser.TokenType
                    public static readonly LPAREN: jdk.nashorn.internal.parser.TokenType
                    public static readonly RPAREN: jdk.nashorn.internal.parser.TokenType
                    public static readonly MUL: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_MUL: jdk.nashorn.internal.parser.TokenType
                    public static readonly ADD: jdk.nashorn.internal.parser.TokenType
                    public static readonly INCPREFIX: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_ADD: jdk.nashorn.internal.parser.TokenType
                    public static readonly COMMARIGHT: jdk.nashorn.internal.parser.TokenType
                    public static readonly SUB: jdk.nashorn.internal.parser.TokenType
                    public static readonly DECPREFIX: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_SUB: jdk.nashorn.internal.parser.TokenType
                    public static readonly PERIOD: jdk.nashorn.internal.parser.TokenType
                    public static readonly DIV: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_DIV: jdk.nashorn.internal.parser.TokenType
                    public static readonly COLON: jdk.nashorn.internal.parser.TokenType
                    public static readonly SEMICOLON: jdk.nashorn.internal.parser.TokenType
                    public static readonly LT: jdk.nashorn.internal.parser.TokenType
                    public static readonly SHL: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_SHL: jdk.nashorn.internal.parser.TokenType
                    public static readonly LE: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN: jdk.nashorn.internal.parser.TokenType
                    public static readonly EQ: jdk.nashorn.internal.parser.TokenType
                    public static readonly EQ_STRICT: jdk.nashorn.internal.parser.TokenType
                    public static readonly BIND: jdk.nashorn.internal.parser.TokenType
                    public static readonly GT: jdk.nashorn.internal.parser.TokenType
                    public static readonly GE: jdk.nashorn.internal.parser.TokenType
                    public static readonly SAR: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_SAR: jdk.nashorn.internal.parser.TokenType
                    public static readonly SHR: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_SHR: jdk.nashorn.internal.parser.TokenType
                    public static readonly TERNARY: jdk.nashorn.internal.parser.TokenType
                    public static readonly LBRACKET: jdk.nashorn.internal.parser.TokenType
                    public static readonly RBRACKET: jdk.nashorn.internal.parser.TokenType
                    public static readonly BIT_XOR: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_BIT_XOR: jdk.nashorn.internal.parser.TokenType
                    public static readonly LBRACE: jdk.nashorn.internal.parser.TokenType
                    public static readonly BIT_OR: jdk.nashorn.internal.parser.TokenType
                    public static readonly ASSIGN_BIT_OR: jdk.nashorn.internal.parser.TokenType
                    public static readonly OR: jdk.nashorn.internal.parser.TokenType
                    public static readonly RBRACE: jdk.nashorn.internal.parser.TokenType
                    public static readonly BIT_NOT: jdk.nashorn.internal.parser.TokenType
                    public static readonly BREAK: jdk.nashorn.internal.parser.TokenType
                    public static readonly CASE: jdk.nashorn.internal.parser.TokenType
                    public static readonly CATCH: jdk.nashorn.internal.parser.TokenType
                    public static readonly CLASS: jdk.nashorn.internal.parser.TokenType
                    public static readonly CONST: jdk.nashorn.internal.parser.TokenType
                    public static readonly CONTINUE: jdk.nashorn.internal.parser.TokenType
                    public static readonly DEBUGGER: jdk.nashorn.internal.parser.TokenType
                    public static readonly DEFAULT: jdk.nashorn.internal.parser.TokenType
                    public static readonly DELETE: jdk.nashorn.internal.parser.TokenType
                    public static readonly DO: jdk.nashorn.internal.parser.TokenType
                    public static readonly ELSE: jdk.nashorn.internal.parser.TokenType
                    public static readonly ENUM: jdk.nashorn.internal.parser.TokenType
                    public static readonly EXPORT: jdk.nashorn.internal.parser.TokenType
                    public static readonly EXTENDS: jdk.nashorn.internal.parser.TokenType
                    public static readonly FALSE: jdk.nashorn.internal.parser.TokenType
                    public static readonly FINALLY: jdk.nashorn.internal.parser.TokenType
                    public static readonly FOR: jdk.nashorn.internal.parser.TokenType
                    public static readonly FUNCTION: jdk.nashorn.internal.parser.TokenType
                    public static readonly IF: jdk.nashorn.internal.parser.TokenType
                    public static readonly IMPLEMENTS: jdk.nashorn.internal.parser.TokenType
                    public static readonly IMPORT: jdk.nashorn.internal.parser.TokenType
                    public static readonly IN: jdk.nashorn.internal.parser.TokenType
                    public static readonly INSTANCEOF: jdk.nashorn.internal.parser.TokenType
                    public static readonly INTERFACE: jdk.nashorn.internal.parser.TokenType
                    public static readonly LET: jdk.nashorn.internal.parser.TokenType
                    public static readonly NEW: jdk.nashorn.internal.parser.TokenType
                    public static readonly NULL: jdk.nashorn.internal.parser.TokenType
                    public static readonly PACKAGE: jdk.nashorn.internal.parser.TokenType
                    public static readonly PRIVATE: jdk.nashorn.internal.parser.TokenType
                    public static readonly PROTECTED: jdk.nashorn.internal.parser.TokenType
                    public static readonly PUBLIC: jdk.nashorn.internal.parser.TokenType
                    public static readonly RETURN: jdk.nashorn.internal.parser.TokenType
                    public static readonly STATIC: jdk.nashorn.internal.parser.TokenType
                    public static readonly SUPER: jdk.nashorn.internal.parser.TokenType
                    public static readonly SWITCH: jdk.nashorn.internal.parser.TokenType
                    public static readonly THIS: jdk.nashorn.internal.parser.TokenType
                    public static readonly THROW: jdk.nashorn.internal.parser.TokenType
                    public static readonly TRUE: jdk.nashorn.internal.parser.TokenType
                    public static readonly TRY: jdk.nashorn.internal.parser.TokenType
                    public static readonly TYPEOF: jdk.nashorn.internal.parser.TokenType
                    public static readonly VAR: jdk.nashorn.internal.parser.TokenType
                    public static readonly VOID: jdk.nashorn.internal.parser.TokenType
                    public static readonly WHILE: jdk.nashorn.internal.parser.TokenType
                    public static readonly WITH: jdk.nashorn.internal.parser.TokenType
                    public static readonly YIELD: jdk.nashorn.internal.parser.TokenType
                    public static readonly DECIMAL: jdk.nashorn.internal.parser.TokenType
                    public static readonly OCTAL: jdk.nashorn.internal.parser.TokenType
                    public static readonly HEXADECIMAL: jdk.nashorn.internal.parser.TokenType
                    public static readonly FLOATING: jdk.nashorn.internal.parser.TokenType
                    public static readonly STRING: jdk.nashorn.internal.parser.TokenType
                    public static readonly ESCSTRING: jdk.nashorn.internal.parser.TokenType
                    public static readonly EXECSTRING: jdk.nashorn.internal.parser.TokenType
                    public static readonly IDENT: jdk.nashorn.internal.parser.TokenType
                    public static readonly REGEX: jdk.nashorn.internal.parser.TokenType
                    public static readonly XML: jdk.nashorn.internal.parser.TokenType
                    public static readonly OBJECT: jdk.nashorn.internal.parser.TokenType
                    public static readonly ARRAY: jdk.nashorn.internal.parser.TokenType
                    public static readonly COMMALEFT: jdk.nashorn.internal.parser.TokenType
                    public static readonly DECPOSTFIX: jdk.nashorn.internal.parser.TokenType
                    public static readonly INCPOSTFIX: jdk.nashorn.internal.parser.TokenType
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