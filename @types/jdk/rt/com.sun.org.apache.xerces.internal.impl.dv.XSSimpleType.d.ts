declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
interface XSSimpleType extends com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition {
    WS_PRESERVE: short
    WS_REPLACE: short
    WS_COLLAPSE: short
    PRIMITIVE_STRING: short
    PRIMITIVE_BOOLEAN: short
    PRIMITIVE_DECIMAL: short
    PRIMITIVE_FLOAT: short
    PRIMITIVE_DOUBLE: short
    PRIMITIVE_DURATION: short
    PRIMITIVE_DATETIME: short
    PRIMITIVE_TIME: short
    PRIMITIVE_DATE: short
    PRIMITIVE_GYEARMONTH: short
    PRIMITIVE_GYEAR: short
    PRIMITIVE_GMONTHDAY: short
    PRIMITIVE_GDAY: short
    PRIMITIVE_GMONTH: short
    PRIMITIVE_HEXBINARY: short
    PRIMITIVE_BASE64BINARY: short
    PRIMITIVE_ANYURI: short
    PRIMITIVE_QNAME: short
    PRIMITIVE_PRECISIONDECIMAL: short
    PRIMITIVE_NOTATION: short
    getPrimitiveKind(): short
    validate(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    validate(arg0: java.lang.Object, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    validate(arg0: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): void
    applyFacets(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSFacets, arg1: short, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext): void
    isEqual(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    isIDType(): boolean
    getWhitespace(): short
}

                            }
                        }
                    }
                }
            }
        }
    }
}