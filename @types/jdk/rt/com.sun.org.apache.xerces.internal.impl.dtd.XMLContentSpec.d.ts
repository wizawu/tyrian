declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLContentSpec {
                                    public static readonly CONTENTSPECNODE_LEAF: short
                                    public static readonly CONTENTSPECNODE_ZERO_OR_ONE: short
                                    public static readonly CONTENTSPECNODE_ZERO_OR_MORE: short
                                    public static readonly CONTENTSPECNODE_ONE_OR_MORE: short
                                    public static readonly CONTENTSPECNODE_CHOICE: short
                                    public static readonly CONTENTSPECNODE_SEQ: short
                                    public static readonly CONTENTSPECNODE_ANY: short
                                    public static readonly CONTENTSPECNODE_ANY_OTHER: short
                                    public static readonly CONTENTSPECNODE_ANY_LOCAL: short
                                    public static readonly CONTENTSPECNODE_ANY_LAX: short
                                    public static readonly CONTENTSPECNODE_ANY_OTHER_LAX: short
                                    public static readonly CONTENTSPECNODE_ANY_LOCAL_LAX: short
                                    public static readonly CONTENTSPECNODE_ANY_SKIP: short
                                    public static readonly CONTENTSPECNODE_ANY_OTHER_SKIP: short
                                    public static readonly CONTENTSPECNODE_ANY_LOCAL_SKIP: short
                                    public type: short
                                    public value: java.lang.Object
                                    public otherValue: java.lang.Object
                                    public constructor()
                                    public constructor(arg0: short, arg1: java.lang.Object, arg2: java.lang.Object)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec$Provider | com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec$Provider$$Lambda, arg1: int)
                                    public clear(): void
                                    public setValues(arg0: short, arg1: java.lang.Object, arg2: java.lang.Object): void
                                    public setValues(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec): void
                                    public setValues(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec$Provider | com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec$Provider$$Lambda, arg1: int): void
                                    public hashCode(): int
                                    public equals(arg0: java.lang.Object): boolean
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