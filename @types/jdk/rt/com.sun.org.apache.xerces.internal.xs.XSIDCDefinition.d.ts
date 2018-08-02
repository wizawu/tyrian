declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSIDCDefinition extends com.sun.org.apache.xerces.internal.xs.XSObject {
                                IC_KEY: short
                                IC_KEYREF: short
                                IC_UNIQUE: short
                                getCategory(): short
                                getSelectorStr(): string
                                getFieldStrs(): com.sun.org.apache.xerces.internal.xs.StringList
                                getRefKey(): com.sun.org.apache.xerces.internal.xs.XSIDCDefinition
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                            }
                        }
                    }
                }
            }
        }
    }
}