declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace opti {
                                    class SchemaParsingConfig extends com.sun.org.apache.xerces.internal.parsers.BasicParserConfiguration implements com.sun.org.apache.xerces.internal.xni.parser.XMLPullParserConfiguration {
                                        protected static readonly XML11_DATATYPE_VALIDATOR_FACTORY: string
                                        protected static readonly WARN_ON_DUPLICATE_ATTDEF: string
                                        protected static readonly WARN_ON_UNDECLARED_ELEMDEF: string
                                        protected static readonly ALLOW_JAVA_ENCODINGS: string
                                        protected static readonly CONTINUE_AFTER_FATAL_ERROR: string
                                        protected static readonly LOAD_EXTERNAL_DTD: string
                                        protected static readonly NOTIFY_BUILTIN_REFS: string
                                        protected static readonly NOTIFY_CHAR_REFS: string
                                        protected static readonly NORMALIZE_DATA: string
                                        protected static readonly SCHEMA_ELEMENT_DEFAULT: string
                                        protected static readonly GENERATE_SYNTHETIC_ANNOTATIONS: string
                                        protected static readonly ERROR_REPORTER: string
                                        protected static readonly ENTITY_MANAGER: string
                                        protected static readonly DOCUMENT_SCANNER: string
                                        protected static readonly DTD_SCANNER: string
                                        protected static readonly XMLGRAMMAR_POOL: string
                                        protected static readonly DTD_VALIDATOR: string
                                        protected static readonly NAMESPACE_BINDER: string
                                        protected static readonly DATATYPE_VALIDATOR_FACTORY: string
                                        protected static readonly VALIDATION_MANAGER: string
                                        protected static readonly SCHEMA_VALIDATOR: string
                                        protected static readonly LOCALE: string
                                        protected readonly fDatatypeValidatorFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
                                        protected readonly fNamespaceScanner: com.sun.org.apache.xerces.internal.impl.XMLNSDocumentScannerImpl
                                        protected readonly fDTDScanner: com.sun.org.apache.xerces.internal.impl.XMLDTDScannerImpl
                                        protected fXML11DatatypeFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
                                        protected fXML11NSDocScanner: com.sun.org.apache.xerces.internal.impl.XML11NSDocumentScannerImpl
                                        protected fXML11DTDScanner: com.sun.org.apache.xerces.internal.impl.XML11DTDScannerImpl
                                        protected fCurrentDVFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
                                        protected fCurrentScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentScanner
                                        protected fCurrentDTDScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
                                        protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                        protected readonly fVersionDetector: com.sun.org.apache.xerces.internal.impl.XMLVersionDetector
                                        protected readonly fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                        protected readonly fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
                                        protected fInputSource: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
                                        protected readonly fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
                                        protected fLocator: com.sun.org.apache.xerces.internal.xni.XMLLocator
                                        protected fParseInProgress: boolean
                                        protected fConfigUpdated: boolean
                                        public constructor()
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                        public getFeatureState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                        public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                        public getPropertyState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                        public setLocale(arg0: java.util.Locale): void
                                        public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                        public parse(arg0: boolean): boolean
                                        public cleanup(): void
                                        public parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                        public reset(): void
                                        protected configurePipeline(): void
                                        protected configureXML11Pipeline(): void
                                        protected checkFeature(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                        protected checkProperty(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
                                        protected resetXML10(): void
                                        protected resetXML11(): void
                                        public resetNodePool(): void
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