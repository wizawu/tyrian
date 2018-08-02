declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
class DTDConfiguration extends com.sun.org.apache.xerces.internal.parsers.BasicParserConfiguration implements com.sun.org.apache.xerces.internal.xni.parser.XMLPullParserConfiguration {
    protected static WARN_ON_DUPLICATE_ATTDEF: string
    protected static WARN_ON_DUPLICATE_ENTITYDEF: string
    protected static WARN_ON_UNDECLARED_ELEMDEF: string
    protected static ALLOW_JAVA_ENCODINGS: string
    protected static CONTINUE_AFTER_FATAL_ERROR: string
    protected static LOAD_EXTERNAL_DTD: string
    protected static NOTIFY_BUILTIN_REFS: string
    protected static NOTIFY_CHAR_REFS: string
    protected static ERROR_REPORTER: string
    protected static ENTITY_MANAGER: string
    protected static DOCUMENT_SCANNER: string
    protected static DTD_SCANNER: string
    protected static XMLGRAMMAR_POOL: string
    protected static DTD_PROCESSOR: string
    protected static DTD_VALIDATOR: string
    protected static NAMESPACE_BINDER: string
    protected static DATATYPE_VALIDATOR_FACTORY: string
    protected static VALIDATION_MANAGER: string
    protected static JAXP_SCHEMA_LANGUAGE: string
    protected static JAXP_SCHEMA_SOURCE: string
    protected static LOCALE: string
    protected static XML_SECURITY_PROPERTY_MANAGER: string
    protected static PRINT_EXCEPTION_STACK_TRACE: boolean
    protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
    protected fDatatypeValidatorFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
    protected fScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentScanner
    protected fInputSource: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
    protected fDTDScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
    protected fDTDProcessor: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDProcessor
    protected fDTDValidator: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidator
    protected fNamespaceBinder: com.sun.org.apache.xerces.internal.impl.XMLNamespaceBinder
    protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
    protected fLocator: com.sun.org.apache.xerces.internal.xni.XMLLocator
    protected fParseInProgress: boolean
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
    public getPropertyState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public setLocale(arg0: java.util.Locale): void
    public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    public parse(arg0: boolean): boolean
    public cleanup(): void
    public parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    protected reset(): void
    protected configurePipeline(): void
    protected configureDTDPipeline(): void
    protected checkFeature(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
    protected checkProperty(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
    protected createEntityManager(): com.sun.org.apache.xerces.internal.impl.XMLEntityManager
    protected createErrorReporter(): com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected createDocumentScanner(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentScanner
    protected createDTDScanner(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
    protected createDTDProcessor(): com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDProcessor
    protected createDTDValidator(): com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidator
    protected createNamespaceBinder(): com.sun.org.apache.xerces.internal.impl.XMLNamespaceBinder
    protected createDatatypeValidatorFactory(): com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
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