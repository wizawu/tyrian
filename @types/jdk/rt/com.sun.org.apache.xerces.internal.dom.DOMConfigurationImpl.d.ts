declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DOMConfigurationImpl extends com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings implements com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration , org.w3c.dom.DOMConfiguration {
    protected static XERCES_VALIDATION: string
    protected static XERCES_NAMESPACES: string
    protected static SCHEMA: string
    protected static SCHEMA_FULL_CHECKING: string
    protected static DYNAMIC_VALIDATION: string
    protected static NORMALIZE_DATA: string
    protected static SEND_PSVI: string
    protected static DTD_VALIDATOR_FACTORY_PROPERTY: string
    protected static NAMESPACE_GROWTH: string
    protected static TOLERATE_DUPLICATES: string
    protected static ENTITY_MANAGER: string
    protected static ERROR_REPORTER: string
    protected static XML_STRING: string
    protected static SYMBOL_TABLE: string
    protected static GRAMMAR_POOL: string
    protected static ERROR_HANDLER: string
    protected static ENTITY_RESOLVER: string
    protected static JAXP_SCHEMA_LANGUAGE: string
    protected static JAXP_SCHEMA_SOURCE: string
    protected static VALIDATION_MANAGER: string
    protected static SCHEMA_DV_FACTORY: string
    protected features: short
    protected static NAMESPACES: short
    protected static DTNORMALIZATION: short
    protected static ENTITIES: short
    protected static CDATA: short
    protected static SPLITCDATA: short
    protected static COMMENTS: short
    protected static VALIDATE: short
    protected static PSVI: short
    protected static WELLFORMED: short
    protected static NSDECL: short
    protected static INFOSET_TRUE_PARAMS: short
    protected static INFOSET_FALSE_PARAMS: short
    protected static INFOSET_MASK: short
    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
    protected fComponents: java.util.ArrayList
    protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
    protected fLocale: java.util.Locale
    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fErrorHandlerWrapper: com.sun.org.apache.xerces.internal.util.DOMErrorHandlerWrapper
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