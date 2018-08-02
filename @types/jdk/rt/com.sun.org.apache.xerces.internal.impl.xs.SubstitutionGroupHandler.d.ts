declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class SubstitutionGroupHandler {
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGrammarBucket)
                                    public getMatchingElemDecl(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl): com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl
                                    protected substitutionGroupOK(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg2: short): boolean
                                    public inSubstitutionGroup(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl): boolean
                                    public reset(): void
                                    public addSubstitutionGroup(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl[]): void
                                    public getSubstitutionGroup(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl): com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl[]
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