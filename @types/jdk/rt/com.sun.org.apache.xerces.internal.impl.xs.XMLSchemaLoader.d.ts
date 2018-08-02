declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XMLSchemaLoader implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarLoader , com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xs.XSLoader , org.w3c.dom.DOMConfiguration {
    protected static SCHEMA_FULL_CHECKING: string
    protected static CONTINUE_AFTER_FATAL_ERROR: string
    protected static ALLOW_JAVA_ENCODINGS: string
    protected static STANDARD_URI_CONFORMANT_FEATURE: string
    protected static VALIDATE_ANNOTATIONS: string
    protected static DISALLOW_DOCTYPE: string
    protected static GENERATE_SYNTHETIC_ANNOTATIONS: string
    protected static HONOUR_ALL_SCHEMALOCATIONS: string
    protected static AUGMENT_PSVI: string
    protected static PARSER_SETTINGS: string
    protected static NAMESPACE_GROWTH: string
    protected static TOLERATE_DUPLICATES: string
    protected static SCHEMA_DV_FACTORY: string
    protected static OVERRIDE_PARSER: string
    public static SYMBOL_TABLE: string
    public static ERROR_REPORTER: string
    protected static ERROR_HANDLER: string
    public static ENTITY_RESOLVER: string
    public static XMLGRAMMAR_POOL: string
    protected static SCHEMA_LOCATION: string
    protected static SCHEMA_NONS_LOCATION: string
    protected static JAXP_SCHEMA_SOURCE: string
    protected static SECURITY_MANAGER: string
    protected static LOCALE: string
    protected static ENTITY_MANAGER: string
    public static ACCESS_EXTERNAL_DTD: string
    public static ACCESS_EXTERNAL_SCHEMA: string
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