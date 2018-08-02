declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
class NamespaceContextImplementation implements javax.xml.namespace.NamespaceContext {
    public constructor()
    public getNamespaceURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: java.lang.String | string): string
    public getNonDefaultPrefix(arg0: java.lang.String | string): string
    public getPrefixes(arg0: java.lang.String | string): java.util.Iterator
    public getPrefix(arg0: int): string
    public getNamespaceURI(arg0: int): string
    public getCurrentContextStartIndex(): int
    public getCurrentContextEndIndex(): int
    public isCurrentContextEmpty(): boolean
    public declarePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public pushContext(): void
    public popContext(): void
    public reset(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}