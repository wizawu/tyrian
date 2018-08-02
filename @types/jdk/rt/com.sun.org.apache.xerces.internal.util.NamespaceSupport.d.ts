declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class NamespaceSupport implements com.sun.org.apache.xerces.internal.xni.NamespaceContext {
    protected fNamespace: java.lang.String[]
    protected fNamespaceSize: int
    protected fContext: int[]
    protected fCurrentContext: int
    protected fPrefixes: java.lang.String[]
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.NamespaceContext)
    public reset(): void
    public pushContext(): void
    public popContext(): void
    public declarePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public getURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: java.lang.String | string): string
    public getDeclaredPrefixCount(): int
    public getDeclaredPrefixAt(arg0: int): string
    public getPrefixes(): java.util.Iterator
    public getAllPrefixes(): java.util.Enumeration
    public getPrefixes(arg0: java.lang.String | string): java.util.Vector
    public containsPrefix(arg0: java.lang.String | string): boolean
    public containsPrefixInCurrentContext(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}