declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLDTDScannerImpl extends com.sun.org.apache.xerces.internal.impl.XMLScanner implements com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner , com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.impl.XMLEntityHandler {
                                protected static readonly SCANNER_STATE_END_OF_INPUT: int
                                protected static readonly SCANNER_STATE_TEXT_DECL: int
                                protected static readonly SCANNER_STATE_MARKUP_DECL: int
                                public fDTDHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
                                protected fDTDContentModelHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
                                protected fScannerState: int
                                protected fStandalone: boolean
                                protected fSeenExternalDTD: boolean
                                protected fSeenExternalPE: boolean
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter, arg2: com.sun.org.apache.xerces.internal.impl.XMLEntityManager)
                                public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                public setLimitAnalyzer(arg0: com.sun.org.apache.xerces.internal.utils.XMLLimitAnalyzer): void
                                public scanDTDExternalSubset(arg0: boolean): boolean
                                public scanDTDInternalSubset(arg0: boolean, arg1: boolean, arg2: boolean): boolean
                                public skipDTD(arg0: boolean): boolean
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public reset(): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
                                public getRecognizedFeatures(): java.lang.String[]
                                public getRecognizedProperties(): java.lang.String[]
                                public getFeatureDefault(arg0: java.lang.String | string): boolean
                                public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                public setDTDHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler): void
                                public getDTDHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
                                public setDTDContentModelHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler): void
                                public getDTDContentModelHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
                                public startEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                protected setScannerState(arg0: int): void
                                protected scanningInternalSubset(): boolean
                                protected startPE(arg0: java.lang.String | string, arg1: boolean): void
                                protected scanTextDecl(): boolean
                                protected scanPIData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString): void
                                protected scanComment(): void
                                protected scanElementDecl(): void
                                protected scanAttlistDecl(): void
                                protected scanAttDefaultDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.XMLString, arg4: com.sun.org.apache.xerces.internal.xni.XMLString): string
                                protected scanEntityValue(arg0: java.lang.String | string, arg1: boolean, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.XMLString): void
                                protected scanDecls(arg0: boolean): boolean
                                public getGrammar(): com.sun.xml.internal.stream.dtd.nonvalidating.DTDGrammar
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}