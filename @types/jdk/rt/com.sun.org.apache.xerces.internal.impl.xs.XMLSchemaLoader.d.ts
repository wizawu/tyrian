declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XMLSchemaLoader implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarLoader , com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xs.XSLoader , org.w3c.dom.DOMConfiguration {
                                    protected static readonly SCHEMA_FULL_CHECKING: string
                                    protected static readonly CONTINUE_AFTER_FATAL_ERROR: string
                                    protected static readonly ALLOW_JAVA_ENCODINGS: string
                                    protected static readonly STANDARD_URI_CONFORMANT_FEATURE: string
                                    protected static readonly VALIDATE_ANNOTATIONS: string
                                    protected static readonly DISALLOW_DOCTYPE: string
                                    protected static readonly GENERATE_SYNTHETIC_ANNOTATIONS: string
                                    protected static readonly HONOUR_ALL_SCHEMALOCATIONS: string
                                    protected static readonly AUGMENT_PSVI: string
                                    protected static readonly PARSER_SETTINGS: string
                                    protected static readonly NAMESPACE_GROWTH: string
                                    protected static readonly TOLERATE_DUPLICATES: string
                                    protected static readonly SCHEMA_DV_FACTORY: string
                                    protected static readonly OVERRIDE_PARSER: string
                                    public static readonly SYMBOL_TABLE: string
                                    public static readonly ERROR_REPORTER: string
                                    protected static readonly ERROR_HANDLER: string
                                    public static readonly ENTITY_RESOLVER: string
                                    public static readonly XMLGRAMMAR_POOL: string
                                    protected static readonly SCHEMA_LOCATION: string
                                    protected static readonly SCHEMA_NONS_LOCATION: string
                                    protected static readonly JAXP_SCHEMA_SOURCE: string
                                    protected static readonly SECURITY_MANAGER: string
                                    protected static readonly LOCALE: string
                                    protected static readonly ENTITY_MANAGER: string
                                    public static readonly ACCESS_EXTERNAL_DTD: string
                                    public static readonly ACCESS_EXTERNAL_SCHEMA: string
                                    public constructor()
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                    public getRecognizedFeatures(): java.lang.String[]
                                    public getFeature(arg0: java.lang.String | string): boolean
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getRecognizedProperties(): java.lang.String[]
                                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public setLocale(arg0: java.util.Locale): void
                                    public getLocale(): java.util.Locale
                                    public setErrorHandler(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler): void
                                    public getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                    public setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
                                    public getEntityResolver(): com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                    public loadGrammar(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource[]): void
                                    public loadGrammar(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    public static resolveDocument(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSDDescription, arg1: java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader$LocationArray>, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
                                    public static processExternalHints(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader$LocationArray>, arg3: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter): void
                                    public static tokenizeSchemaLocationStr(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader$LocationArray>): boolean
                                    public getFeatureDefault(arg0: java.lang.String | string): boolean
                                    public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                    public getConfig(): org.w3c.dom.DOMConfiguration
                                    public load(arg0: org.w3c.dom.ls.LSInput): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public loadInputList(arg0: com.sun.org.apache.xerces.internal.xs.LSInputList): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public loadURI(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public loadURIList(arg0: com.sun.org.apache.xerces.internal.xs.StringList): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public canSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): boolean
                                    public getParameter(arg0: java.lang.String | string): java.lang.Object
                                    public getParameterNames(): org.w3c.dom.DOMStringList
                                    public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
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