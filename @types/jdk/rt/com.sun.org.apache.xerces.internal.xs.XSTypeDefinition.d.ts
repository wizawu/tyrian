declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
interface XSTypeDefinition extends com.sun.org.apache.xerces.internal.xs.XSObject {
    COMPLEX_TYPE: short
    SIMPLE_TYPE: short
    getTypeCategory(): short
    getBaseType(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    isFinal(arg0: short): boolean
    getFinal(): short
    getAnonymous(): boolean
    derivedFromType(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: short): boolean
    derivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short): boolean
}

                        }
                    }
                }
            }
        }
    }
}