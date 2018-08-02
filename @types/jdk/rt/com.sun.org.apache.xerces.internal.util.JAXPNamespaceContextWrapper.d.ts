declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class JAXPNamespaceContextWrapper implements com.sun.org.apache.xerces.internal.xni.NamespaceContext {
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
    public setSymbolTable(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable): void
    public getSymbolTable(): com.sun.org.apache.xerces.internal.util.SymbolTable
    public setDeclaredPrefixes(arg0: java.util.List): void
    public getDeclaredPrefixes(): java.util.List
    public getURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: java.lang.String | string): string
    public getAllPrefixes(): java.util.Enumeration
    public pushContext(): void
    public popContext(): void
    public declarePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public getDeclaredPrefixCount(): int
    public getDeclaredPrefixAt(arg0: int): string
    public reset(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}