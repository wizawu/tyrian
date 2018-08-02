declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace traversers {
                                    class XSDHandler {
                                        protected static VALIDATION: string
                                        protected static XMLSCHEMA_VALIDATION: string
                                        protected static ALLOW_JAVA_ENCODINGS: string
                                        protected static CONTINUE_AFTER_FATAL_ERROR: string
                                        protected static STANDARD_URI_CONFORMANT_FEATURE: string
                                        protected static DISALLOW_DOCTYPE: string
                                        protected static GENERATE_SYNTHETIC_ANNOTATIONS: string
                                        protected static VALIDATE_ANNOTATIONS: string
                                        protected static HONOUR_ALL_SCHEMALOCATIONS: string
                                        protected static NAMESPACE_GROWTH: string
                                        protected static TOLERATE_DUPLICATES: string
                                        protected static STRING_INTERNING: string
                                        protected static ERROR_HANDLER: string
                                        protected static JAXP_SCHEMA_SOURCE: string
                                        public static ENTITY_RESOLVER: string
                                        protected static ENTITY_MANAGER: string
                                        public static ERROR_REPORTER: string
                                        public static XMLGRAMMAR_POOL: string
                                        public static SYMBOL_TABLE: string
                                        protected static SECURITY_MANAGER: string
                                        protected static LOCALE: string
                                        protected static DEBUG_NODE_POOL: boolean
                                        public static REDEF_IDENTIFIER: string
                                        protected fDeclPool: com.sun.org.apache.xerces.internal.impl.xs.XSDeclarationPool
                                        protected fSecurityManager: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager
                                        public constructor()
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGrammarBucket)
                                        public parseSchema(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSDDescription, arg2: java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader$LocationArray>): com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar
                                        protected findGrammar(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSDDescription, arg1: boolean): com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar
                                        protected constructTrees(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.xs.XSDDescription, arg3: boolean): com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo
                                        protected buildGlobalNameRegistries(): void
                                        protected traverseSchemas(arg0: java.util.ArrayList): void
                                        protected getGlobalDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo, arg1: int, arg2: com.sun.org.apache.xerces.internal.xni.QName, arg3: org.w3c.dom.Element): java.lang.Object
                                        protected getGlobalDecl(arg0: java.lang.String | string, arg1: int): java.lang.Object
                                        protected getGlobalDeclFromGrammar(arg0: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar, arg1: int, arg2: java.lang.String | string): java.lang.Object
                                        protected getGlobalDeclFromGrammar(arg0: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string): java.lang.Object
                                        protected traverseGlobalDecl(arg0: int, arg1: org.w3c.dom.Element, arg2: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo, arg3: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar): java.lang.Object
                                        public schemaDocument2SystemId(arg0: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo): string
                                        protected resolveKeyRefs(): void
                                        protected getIDRegistry(): java.util.Map
                                        protected getIDRegistry_sub(): java.util.Map
                                        protected storeKeyRef(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDocumentInfo, arg2: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl): void
                                        public setDeclPool(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSDeclarationPool): void
                                        public setDVFactory(arg0: com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory): void
                                        public getDVFactory(): com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory
                                        public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                        public element2Locator(arg0: org.w3c.dom.Element): com.sun.org.apache.xerces.internal.impl.xs.util.SimpleLocator
                                        public element2Locator(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xerces.internal.impl.xs.util.SimpleLocator): boolean
                                        public setGenerateSyntheticAnnotations(arg0: boolean): void
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