declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
class XML11NonValidatingConfiguration extends com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings implements com.sun.org.apache.xerces.internal.xni.parser.XMLPullParserConfiguration , com.sun.org.apache.xerces.internal.parsers.XML11Configurable {
    protected static XML11_DATATYPE_VALIDATOR_FACTORY: string
    protected static VALIDATION: string
    protected static NAMESPACES: string
    protected static EXTERNAL_GENERAL_ENTITIES: string
    protected static EXTERNAL_PARAMETER_ENTITIES: string
    protected static CONTINUE_AFTER_FATAL_ERROR: string
    protected static XML_STRING: string
    protected static SYMBOL_TABLE: string
    protected static ERROR_HANDLER: string
    protected static ENTITY_RESOLVER: string
    protected static ERROR_REPORTER: string
    protected static ENTITY_MANAGER: string
    protected static DOCUMENT_SCANNER: string
    protected static DTD_SCANNER: string
    protected static XMLGRAMMAR_POOL: string
    protected static DTD_VALIDATOR: string
    protected static NAMESPACE_BINDER: string
    protected static DATATYPE_VALIDATOR_FACTORY: string
    protected static VALIDATION_MANAGER: string
    protected static PRINT_EXCEPTION_STACK_TRACE: boolean
    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
    protected fInputSource: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
    protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
    protected fVersionDetector: com.sun.org.apache.xerces.internal.impl.XMLVersionDetector
    protected fLocator: com.sun.org.apache.xerces.internal.xni.XMLLocator
    protected fLocale: java.util.Locale
    protected fComponents: java.util.ArrayList
    protected fXML11Components: java.util.ArrayList
    protected fCommonComponents: java.util.ArrayList
    protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
    protected fDTDHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
    protected fDTDContentModelHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
    protected fLastComponent: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
    protected fParseInProgress: boolean
    protected fConfigUpdated: boolean
    protected fDatatypeValidatorFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
    protected fNamespaceScanner: com.sun.org.apache.xerces.internal.impl.XMLNSDocumentScannerImpl
    protected fNonNSScanner: com.sun.org.apache.xerces.internal.impl.XMLDocumentScannerImpl
    protected fDTDScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
    protected fXML11DatatypeFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
    protected fXML11NSDocScanner: com.sun.org.apache.xerces.internal.impl.XML11NSDocumentScannerImpl
    protected fXML11DocScanner: com.sun.org.apache.xerces.internal.impl.XML11DocumentScannerImpl
    protected fXML11DTDScanner: com.sun.org.apache.xerces.internal.impl.XML11DTDScannerImpl
    protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
    protected fCurrentScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentScanner
    protected fCurrentDVFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
    protected fCurrentDTDScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
    public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    public setLocale(arg0: java.util.Locale): void
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
    public cleanup(): void
    public parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    public parse(arg0: boolean): boolean
    public getFeatureState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getLocale(): java.util.Locale
    protected reset(): void
    protected resetCommon(): void
    protected resetXML11(): void
    protected configureXML11Pipeline(): void
    protected configurePipeline(): void
    protected checkFeature(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
    protected checkProperty(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
    protected addComponent(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponent): void
    protected addCommonComponent(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponent): void
    protected addXML11Component(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponent): void
    protected addRecognizedParamsAndSetDefaults(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponent): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}