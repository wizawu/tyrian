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
                                        public static readonly ATTIDX_ABSTRACT: int
                                        public static readonly ATTIDX_AFORMDEFAULT: int
                                        public static readonly ATTIDX_BASE: int
                                        public static readonly ATTIDX_BLOCK: int
                                        public static readonly ATTIDX_BLOCKDEFAULT: int
                                        public static readonly ATTIDX_DEFAULT: int
                                        public static readonly ATTIDX_EFORMDEFAULT: int
                                        public static readonly ATTIDX_FINAL: int
                                        public static readonly ATTIDX_FINALDEFAULT: int
                                        public static readonly ATTIDX_FIXED: int
                                        public static readonly ATTIDX_FORM: int
                                        public static readonly ATTIDX_ID: int
                                        public static readonly ATTIDX_ITEMTYPE: int
                                        public static readonly ATTIDX_MAXOCCURS: int
                                        public static readonly ATTIDX_MEMBERTYPES: int
                                        public static readonly ATTIDX_MINOCCURS: int
                                        public static readonly ATTIDX_MIXED: int
                                        public static readonly ATTIDX_NAME: int
                                        public static readonly ATTIDX_NAMESPACE: int
                                        public static readonly ATTIDX_NAMESPACE_LIST: int
                                        public static readonly ATTIDX_NILLABLE: int
                                        public static readonly ATTIDX_NONSCHEMA: int
                                        public static readonly ATTIDX_PROCESSCONTENTS: int
                                        public static readonly ATTIDX_PUBLIC: int
                                        public static readonly ATTIDX_REF: int
                                        public static readonly ATTIDX_REFER: int
                                        public static readonly ATTIDX_SCHEMALOCATION: int
                                        public static readonly ATTIDX_SOURCE: int
                                        public static readonly ATTIDX_SUBSGROUP: int
                                        public static readonly ATTIDX_SYSTEM: int
                                        public static readonly ATTIDX_TARGETNAMESPACE: int
                                        public static readonly ATTIDX_TYPE: int
                                        public static readonly ATTIDX_USE: int
                                        public static readonly ATTIDX_VALUE: int
                                        public static readonly ATTIDX_ENUMNSDECLS: int
                                        public static readonly ATTIDX_VERSION: int
                                        public static readonly ATTIDX_XML_LANG: int
                                        public static readonly ATTIDX_XPATH: int
                                        public static readonly ATTIDX_FROMDEFAULT: int
                                        public static readonly ATTIDX_ISRETURNED: int
                                        protected static readonly DT_ANYURI: int
                                        protected static readonly DT_ID: int
                                        protected static readonly DT_QNAME: int
                                        protected static readonly DT_STRING: int
                                        protected static readonly DT_TOKEN: int
                                        protected static readonly DT_NCNAME: int
                                        protected static readonly DT_XPATH: int
                                        protected static readonly DT_XPATH1: int
                                        protected static readonly DT_LANGUAGE: int
                                        protected static readonly DT_COUNT: int
                                        protected static readonly DT_BLOCK: int
                                        protected static readonly DT_BLOCK1: int
                                        protected static readonly DT_FINAL: int
                                        protected static readonly DT_FINAL1: int
                                        protected static readonly DT_FINAL2: int
                                        protected static readonly DT_FORM: int
                                        protected static readonly DT_MAXOCCURS: int
                                        protected static readonly DT_MAXOCCURS1: int
                                        protected static readonly DT_MEMBERTYPES: int
                                        protected static readonly DT_MINOCCURS1: int
                                        protected static readonly DT_NAMESPACE: int
                                        protected static readonly DT_PROCESSCONTENTS: int
                                        protected static readonly DT_USE: int
                                        protected static readonly DT_WHITESPACE: int
                                        protected static readonly DT_BOOLEAN: int
                                        protected static readonly DT_NONNEGINT: int
                                        protected static readonly DT_POSINT: int
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