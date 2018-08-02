declare namespace java {
    namespace nio {
        namespace charset {
            namespace spi {
                abstract class CharsetProvider {
                    protected constructor()
                    public charsets(): java.util.Iterator<java.nio.charset.Charset>
                    public charsetForName(arg0: java.lang.String | string): java.nio.charset.Charset
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}