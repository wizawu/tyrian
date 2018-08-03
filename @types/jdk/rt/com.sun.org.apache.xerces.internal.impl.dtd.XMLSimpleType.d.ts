declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLSimpleType {
                                    public static readonly TYPE_CDATA: short
                                    public static readonly TYPE_ENTITY: short
                                    public static readonly TYPE_ENUMERATION: short
                                    public static readonly TYPE_ID: short
                                    public static readonly TYPE_IDREF: short
                                    public static readonly TYPE_NMTOKEN: short
                                    public static readonly TYPE_NOTATION: short
                                    public static readonly TYPE_NAMED: short
                                    public static readonly DEFAULT_TYPE_DEFAULT: short
                                    public static readonly DEFAULT_TYPE_FIXED: short
                                    public static readonly DEFAULT_TYPE_IMPLIED: short
                                    public static readonly DEFAULT_TYPE_REQUIRED: short
                                    public type: short
                                    public name: string
                                    public enumeration: java.lang.String[]
                                    public list: boolean
                                    public defaultType: short
                                    public defaultValue: string
                                    public nonNormalizedDefaultValue: string
                                    public datatypeValidator: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    public constructor()
                                    public setValues(arg0: short, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: boolean, arg4: short, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator | com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator$$Lambda): void
                                    public setValues(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLSimpleType): void
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