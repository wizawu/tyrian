declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XSWildcardDecl implements com.sun.org.apache.xerces.internal.xs.XSWildcard {
                                    public static ABSENT: string
                                    public fType: short
                                    public fProcessContents: short
                                    public fNamespaceList: java.lang.String[]
                                    public fAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public constructor()
                                    public allowNamespace(arg0: java.lang.String | string): boolean
                                    public isSubsetOf(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl): boolean
                                    public weakerProcessContents(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl): boolean
                                    public performUnionWith(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl, arg1: short): com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl
                                    public performIntersectionWith(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl, arg1: short): com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl
                                    public toString(): string
                                    public getType(): short
                                    public getName(): string
                                    public getNamespace(): string
                                    public getConstraintType(): short
                                    public getNsConstraintList(): com.sun.org.apache.xerces.internal.xs.StringList
                                    public getProcessContents(): short
                                    public getProcessContentsAsString(): string
                                    public getAnnotation(): com.sun.org.apache.xerces.internal.xs.XSAnnotation
                                    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
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