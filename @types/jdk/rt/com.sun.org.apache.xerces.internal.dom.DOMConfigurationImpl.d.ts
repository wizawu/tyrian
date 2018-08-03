declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class DOMConfigurationImpl extends com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings implements com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration , org.w3c.dom.DOMConfiguration {
                                protected static readonly XERCES_VALIDATION: string
                                protected static readonly XERCES_NAMESPACES: string
                                protected static readonly SCHEMA: string
                                protected static readonly SCHEMA_FULL_CHECKING: string
                                protected static readonly DYNAMIC_VALIDATION: string
                                protected static readonly NORMALIZE_DATA: string
                                protected static readonly SEND_PSVI: string
                                protected static readonly DTD_VALIDATOR_FACTORY_PROPERTY: string
                                protected static readonly NAMESPACE_GROWTH: string
                                protected static readonly TOLERATE_DUPLICATES: string
                                protected static readonly ENTITY_MANAGER: string
                                protected static readonly ERROR_REPORTER: string
                                protected static readonly XML_STRING: string
                                protected static readonly SYMBOL_TABLE: string
                                protected static readonly GRAMMAR_POOL: string
                                protected static readonly ERROR_HANDLER: string
                                protected static readonly ENTITY_RESOLVER: string
                                protected static readonly JAXP_SCHEMA_LANGUAGE: string
                                protected static readonly JAXP_SCHEMA_SOURCE: string
                                protected static readonly VALIDATION_MANAGER: string
                                protected static readonly SCHEMA_DV_FACTORY: string
                                protected features: short
                                protected static readonly NAMESPACES: short
                                protected static readonly DTNORMALIZATION: short
                                protected static readonly ENTITIES: short
                                protected static readonly CDATA: short
                                protected static readonly SPLITCDATA: short
                                protected static readonly COMMENTS: short
                                protected static readonly VALIDATE: short
                                protected static readonly PSVI: short
                                protected static readonly WELLFORMED: short
                                protected static readonly NSDECL: short
                                protected static readonly INFOSET_TRUE_PARAMS: short
                                protected static readonly INFOSET_FALSE_PARAMS: short
                                protected static readonly INFOSET_MASK: short
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fComponents: java.util.ArrayList
                                protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
                                protected fLocale: java.util.Locale
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected readonly fErrorHandlerWrapper: com.sun.org.apache.xerces.internal.util.DOMErrorHandlerWrapper
                                protected constructor()
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                public parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                public setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
                                public getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                public setDTDHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler): void
                                public getDTDHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
                                public setDTDContentModelHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler): void
                                public getDTDContentModelHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
                                public setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
                                public getEntityResolver(): com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                public setErrorHandler(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler): void
                                public getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public setLocale(arg0: java.util.Locale): void
                                public getLocale(): java.util.Locale
                                public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getParameter(arg0: java.lang.String | string): java.lang.Object
                                public canSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): boolean
                                public getParameterNames(): org.w3c.dom.DOMStringList
                                protected reset(): void
                                protected checkProperty(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
                                protected addComponent(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponent): void
                                protected createValidationManager(): com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}