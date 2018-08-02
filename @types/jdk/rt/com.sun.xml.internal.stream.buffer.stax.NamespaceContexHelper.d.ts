declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        namespace stax {
class NamespaceContexHelper implements com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx {
    public constructor()
    public getNamespaceURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: java.lang.String | string): string
    public getPrefixes(arg0: java.lang.String | string): java.util.Iterator
    public iterator(): java.util.Iterator<com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx$Binding>
    public declareDefaultNamespace(arg0: java.lang.String | string): void
    public declareNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public pushContext(): void
    public popContext(): void
    public resetContexts(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}