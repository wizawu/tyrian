declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLElementDecl {
                                    public static readonly TYPE_ANY: short
                                    public static readonly TYPE_EMPTY: short
                                    public static readonly TYPE_MIXED: short
                                    public static readonly TYPE_CHILDREN: short
                                    public static readonly TYPE_SIMPLE: short
                                    public readonly name: com.sun.org.apache.xerces.internal.xni.QName
                                    public scope: int
                                    public type: short
                                    public contentModelValidator: com.sun.org.apache.xerces.internal.impl.dtd.models.ContentModelValidator
                                    public readonly simpleType: com.sun.org.apache.xerces.internal.impl.dtd.XMLSimpleType
                                    public constructor()
                                    public setValues(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dtd.models.ContentModelValidator | com.sun.org.apache.xerces.internal.impl.dtd.models.ContentModelValidator$$Lambda, arg4: com.sun.org.apache.xerces.internal.impl.dtd.XMLSimpleType): void
                                    public clear(): void
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