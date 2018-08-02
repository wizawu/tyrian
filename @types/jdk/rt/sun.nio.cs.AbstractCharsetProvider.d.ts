declare namespace sun {
    namespace nio {
        namespace cs {
class AbstractCharsetProvider extends java.nio.charset.spi.CharsetProvider {
    protected constructor()
    protected constructor(arg0: java.lang.String | string)
    protected charset(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[]): void
    protected deleteCharset(arg0: java.lang.String | string, arg1: java.lang.String[]): void
    protected init(): void
    public charsetForName(arg0: java.lang.String | string): java.nio.charset.Charset
    public charsets(): java.util.Iterator<java.nio.charset.Charset>
    public aliases(arg0: java.lang.String | string): java.lang.String[]
    public static class: java.lang.Class<any>
}

        }
    }
}