declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xpointer {
                            interface XPointerPart {
                                EVENT_ELEMENT_START: int
                                EVENT_ELEMENT_END: int
                                EVENT_ELEMENT_EMPTY: int
                                parseXPointer(arg0: java.lang.String | string): void
                                resolveXPointer(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations, arg3: int): boolean
                                isFragmentResolved(): boolean
                                isChildFragmentResolved(): boolean
                                getSchemeName(): string
                                getSchemeData(): string
                                setSchemeName(arg0: java.lang.String | string): void
                                setSchemeData(arg0: java.lang.String | string): void
                            }
                        }
                    }
                }
            }
        }
    }
}