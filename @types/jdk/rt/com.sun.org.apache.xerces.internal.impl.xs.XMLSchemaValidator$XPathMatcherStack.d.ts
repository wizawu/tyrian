declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XMLSchemaValidator$XPathMatcherStack {
    protected fMatchers: com.sun.org.apache.xerces.internal.impl.xs.identity.XPathMatcher[]
    protected fMatchersCount: int
    protected fContextStack: com.sun.org.apache.xerces.internal.util.IntStack
    public constructor()
    public clear(): void
    public size(): int
    public getMatcherCount(): int
    public addMatcher(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.XPathMatcher): void
    public getMatcherAt(arg0: int): com.sun.org.apache.xerces.internal.impl.xs.identity.XPathMatcher
    public pushContext(): void
    public popContext(): void
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