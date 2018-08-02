declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
class Scanner {
    protected content: char[]
    protected position: int
    protected limit: int
    protected line: int
    protected ch0: char
    protected ch1: char
    protected ch2: char
    protected ch3: char
    protected constructor(arg0: char[], arg1: int, arg2: int, arg3: int)
    protected constructor(arg0: java.lang.String | string)
    protected atEOF(): boolean
    protected charAt(arg0: int): char
    protected reset(arg0: int): void
    protected skip(arg0: int): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}