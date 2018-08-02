declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace traversers {
class XSAttributeChecker {
    public static ATTIDX_ABSTRACT: int
    public static ATTIDX_AFORMDEFAULT: int
    public static ATTIDX_BASE: int
    public static ATTIDX_BLOCK: int
    public static ATTIDX_BLOCKDEFAULT: int
    public static ATTIDX_DEFAULT: int
    public static ATTIDX_EFORMDEFAULT: int
    public static ATTIDX_FINAL: int
    public static ATTIDX_FINALDEFAULT: int
    public static ATTIDX_FIXED: int
    public static ATTIDX_FORM: int
    public static ATTIDX_ID: int
    public static ATTIDX_ITEMTYPE: int
    public static ATTIDX_MAXOCCURS: int
    public static ATTIDX_MEMBERTYPES: int
    public static ATTIDX_MINOCCURS: int
    public static ATTIDX_MIXED: int
    public static ATTIDX_NAME: int
    public static ATTIDX_NAMESPACE: int
    public static ATTIDX_NAMESPACE_LIST: int
    public static ATTIDX_NILLABLE: int
    public static ATTIDX_NONSCHEMA: int
    public static ATTIDX_PROCESSCONTENTS: int
    public static ATTIDX_PUBLIC: int
    public static ATTIDX_REF: int
    public static ATTIDX_REFER: int
    public static ATTIDX_SCHEMALOCATION: int
    public static ATTIDX_SOURCE: int
    public static ATTIDX_SUBSGROUP: int
    public static ATTIDX_SYSTEM: int
    public static ATTIDX_TARGETNAMESPACE: int
    public static ATTIDX_TYPE: int
    public static ATTIDX_USE: int
    public static ATTIDX_VALUE: int
    public static ATTIDX_ENUMNSDECLS: int
    public static ATTIDX_VERSION: int
    public static ATTIDX_XML_LANG: int
    public static ATTIDX_XPATH: int
    public static ATTIDX_FROMDEFAULT: int
    public static ATTIDX_ISRETURNED: int
    protected static DT_ANYURI: int
    protected static DT_ID: int
    protected static DT_QNAME: int
    protected static DT_STRING: int
    protected static DT_TOKEN: int
    protected static DT_NCNAME: int
    protected static DT_XPATH: int
    protected static DT_XPATH1: int
    protected static DT_LANGUAGE: int
    protected static DT_COUNT: int
    protected static DT_BLOCK: int
    protected static DT_BLOCK1: int
    protected static DT_FINAL: int
    protected static DT_FINAL1: int
    protected static DT_FINAL2: int
    protected static DT_FORM: int
    protected static DT_MAXOCCURS: int
    protected static DT_MAXOCCURS1: int
    protected static DT_MEMBERTYPES: int
    protected static DT_MINOCCURS1: int
    protected static DT_NAMESPACE: int
    protected static DT_PROCESSCONTENTS: int
    protected static DT_USE: int
    protected static DT_WHITESPACE: int
    protected static DT_BOOLEAN: int
    protected static DT_NONNEGINT: int
    protected static DT_POSINT: int
    protected fSchemaHandler: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler
    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
    protected fNonSchemaAttrs: java.util.Map
    protected fNamespaceList: java.util.Vector
    protected fSeen: boolean[]
    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler)
    public reset(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable): void
    public checkAttributes(arg0: org.w3c.dom.Element, arg1: boolean, arg2: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo): java.lang.Object[]
    public checkAttributes(arg0: org.w3c.dom.Element, arg1: boolean, arg2: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo, arg3: boolean): java.lang.Object[]
    public checkNonSchemaAttributes(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGrammarBucket): void
    public static normalize(arg0: java.lang.String | string, arg1: short): string
    protected getAvailableArray(): java.lang.Object[]
    public returnAttrArray(arg0: java.lang.Object[], arg1: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo): void
    public resolveNamespace(arg0: org.w3c.dom.Element, arg1: org.w3c.dom.Attr[], arg2: com.sun.org.apache.xerces.internal.impl.xs.SchemaNamespaceSupport): void
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
}