declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class Debug {
    public static firstJSFrame(arg0: java.lang.Throwable): string
    public static firstJSFrame(): string
    public static scriptStack(): string
    public static id(arg0: java.lang.Object): string
    public static intId(arg0: java.lang.Object): int
    public static stackTraceElementAt(arg0: int): string
    public static caller(arg0: int, arg1: int, ...arg2: java.lang.String[]): string
    public static dumpTokens(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.parser.Lexer, arg2: jdk.nashorn.internal.parser.TokenStream): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}