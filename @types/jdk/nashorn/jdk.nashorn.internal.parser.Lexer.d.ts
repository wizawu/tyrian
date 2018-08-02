declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class Lexer extends jdk.nashorn.internal.parser.Scanner {
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.parser.TokenStream)
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.parser.TokenStream, arg2: boolean)
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: int, arg2: int, arg3: jdk.nashorn.internal.parser.TokenStream, arg4: boolean, arg5: boolean)
                    protected add(arg0: jdk.nashorn.internal.parser.TokenType, arg1: int, arg2: int): void
                    protected add(arg0: jdk.nashorn.internal.parser.TokenType, arg1: int): void
                    public static getWhitespaceRegExp(): string
                    public static isJSWhitespace(arg0: char): boolean
                    public static isJSEOL(arg0: char): boolean
                    protected isStringDelimiter(arg0: char): boolean
                    protected isWhitespace(arg0: char): boolean
                    protected isEOL(arg0: char): boolean
                    protected skipComments(): boolean
                    public valueOfPattern(arg0: int, arg1: int): jdk.nashorn.internal.parser.Lexer$RegexToken
                    public canStartLiteral(arg0: jdk.nashorn.internal.parser.TokenType): boolean
                    protected scanLiteral(arg0: long, arg1: jdk.nashorn.internal.parser.TokenType, arg2: jdk.nashorn.internal.parser.Lexer$LineInfoReceiver | jdk.nashorn.internal.parser.Lexer$LineInfoReceiver$$Lambda): boolean
                    protected static convertDigit(arg0: char, arg1: int): int
                    protected scanString(arg0: boolean): void
                    protected isEscapeCharacter(arg0: char): boolean
                    protected scanNumber(): void
                    public lexify(): void
                    protected static message(arg0: java.lang.String | string, ...arg1: java.lang.String[]): string
                    protected error(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.parser.TokenType, arg2: int, arg3: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}