declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            abstract class BasicParserConfiguration extends com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings implements com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration {
                                protected static readonly VALIDATION: string
                                protected static readonly NAMESPACES: string
                                protected static readonly EXTERNAL_GENERAL_ENTITIES: string
                                protected static readonly EXTERNAL_PARAMETER_ENTITIES: string
                                protected static readonly XML_STRING: string
                                protected static readonly SYMBOL_TABLE: string
                                protected static readonly ERROR_HANDLER: string
                                protected static readonly ENTITY_RESOLVER: string
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fLocale: java.util.Locale
                                protected fComponents: java.util.ArrayList
                                protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                protected fDTDHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
                                protected fDTDContentModelHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
                                protected fLastComponent: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                protected constructor()
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                protected addComponent(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponent): void
                                public abstract parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
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
                                protected reset(): void
                                protected checkProperty(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
                                protected checkFeature(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                public static class: java.lang.Class<any>
                            }
                            interface BasicParserConfiguration$$Lambda extends com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings implements com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration {
                                (arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                            }
                        }
                    }
                }
            }
        }
    }
}