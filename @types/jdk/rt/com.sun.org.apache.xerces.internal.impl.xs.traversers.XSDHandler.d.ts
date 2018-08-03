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
                                        protected static readonly VALIDATION: string
                                        protected static readonly XMLSCHEMA_VALIDATION: string
                                        protected static readonly ALLOW_JAVA_ENCODINGS: string
                                        protected static readonly CONTINUE_AFTER_FATAL_ERROR: string
                                        protected static readonly STANDARD_URI_CONFORMANT_FEATURE: string
                                        protected static readonly DISALLOW_DOCTYPE: string
                                        protected static readonly GENERATE_SYNTHETIC_ANNOTATIONS: string
                                        protected static readonly VALIDATE_ANNOTATIONS: string
                                        protected static readonly HONOUR_ALL_SCHEMALOCATIONS: string
                                        protected static readonly NAMESPACE_GROWTH: string
                                        protected static readonly TOLERATE_DUPLICATES: string
                                        protected static readonly STRING_INTERNING: string
                                        protected static readonly ERROR_HANDLER: string
                                        protected static readonly JAXP_SCHEMA_SOURCE: string
                                        public static readonly ENTITY_RESOLVER: string
                                        protected static readonly ENTITY_MANAGER: string
                                        public static readonly ERROR_REPORTER: string
                                        public static readonly XMLGRAMMAR_POOL: string
                                        public static readonly SYMBOL_TABLE: string
                                        protected static readonly SECURITY_MANAGER: string
                                        protected static readonly LOCALE: string
                                        protected static readonly DEBUG_NODE_POOL: boolean
                                        public static readonly REDEF_IDENTIFIER: string
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