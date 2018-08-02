declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
class Token {
    public static toDesc(arg0: jdk.nashorn.internal.parser.TokenType, arg1: int, arg2: int): long
    public static descPosition(arg0: long): int
    public static withDelimiter(arg0: long): long
    public static descLength(arg0: long): int
    public static descType(arg0: long): jdk.nashorn.internal.parser.TokenType
    public static recast(arg0: long, arg1: jdk.nashorn.internal.parser.TokenType): long
    public static toString(arg0: jdk.nashorn.internal.runtime.Source, arg1: long, arg2: boolean): string
    public static toString(arg0: jdk.nashorn.internal.runtime.Source, arg1: long): string
    public static toString(arg0: long): string
    public static hashCode(arg0: long): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}