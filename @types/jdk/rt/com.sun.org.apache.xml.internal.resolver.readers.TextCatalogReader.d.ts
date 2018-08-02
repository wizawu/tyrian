declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace readers {
class TextCatalogReader implements com.sun.org.apache.xml.internal.resolver.readers.CatalogReader {
    protected catfile: java.io.InputStream
    protected stack: int[]
    protected tokenStack: java.util.Stack
    protected top: int
    protected caseSensitive: boolean
    public constructor()
    public setCaseSensitive(arg0: boolean): void
    public getCaseSensitive(): boolean
    public readCatalog(arg0: com.sun.org.apache.xml.internal.resolver.Catalog, arg1: java.lang.String | string): void
    public readCatalog(arg0: com.sun.org.apache.xml.internal.resolver.Catalog, arg1: java.io.InputStream): void
    protected finalize(): void
    protected nextToken(): string
    protected nextChar(): int
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}