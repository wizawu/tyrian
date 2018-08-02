declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            interface XMLDTDContentModelHandler {
                                SEPARATOR_CHOICE: short
                                SEPARATOR_SEQUENCE: short
                                OCCURS_ZERO_OR_ONE: short
                                OCCURS_ZERO_OR_MORE: short
                                OCCURS_ONE_OR_MORE: short
                                startContentModel(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                any(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                empty(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                startGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                pcdata(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                element(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                separator(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                occurrence(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endContentModel(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                setDTDContentModelSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource): void
                                getDTDContentModelSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
                            }
                        }
                    }
                }
            }
        }
    }
}