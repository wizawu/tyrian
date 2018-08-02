declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class BalancedDTDGrammar extends com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar {
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDDescription)
                                    public startContentModel(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public pcdata(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public element(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public separator(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public occurrence(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    protected addContentSpecToElement(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLElementDecl): void
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