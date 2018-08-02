declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xinclude {
class MultipleScopeNamespaceSupport extends com.sun.org.apache.xerces.internal.util.NamespaceSupport {
    protected fScope: int[]
    protected fCurrentScope: int
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.NamespaceContext)
    public getAllPrefixes(): java.util.Enumeration
    public getScopeForContext(arg0: int): int
    public getPrefix(arg0: java.lang.String | string): string
    public getURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: java.lang.String | string, arg1: int): string
    public getURI(arg0: java.lang.String | string, arg1: int): string
    public getPrefix(arg0: java.lang.String | string, arg1: int, arg2: int): string
    public getURI(arg0: java.lang.String | string, arg1: int, arg2: int): string
    public reset(): void
    public pushScope(): void
    public popScope(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}