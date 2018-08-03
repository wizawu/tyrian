declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLDocumentFragmentScannerImpl extends com.sun.org.apache.xerces.internal.impl.XMLScanner implements com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentScanner , com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.impl.XMLEntityHandler , com.sun.xml.internal.stream.XMLBufferListener {
                                protected fElementAttributeLimit: int
                                protected fXMLNameLimit: int
                                protected fExternalSubsetResolver: com.sun.org.apache.xerces.internal.impl.ExternalSubsetResolver
                                protected static readonly SCANNER_STATE_START_OF_MARKUP: int
                                protected static readonly SCANNER_STATE_CONTENT: int
                                protected static readonly SCANNER_STATE_PI: int
                                protected static readonly SCANNER_STATE_DOCTYPE: int
                                protected static readonly SCANNER_STATE_XML_DECL: int
                                protected static readonly SCANNER_STATE_ROOT_ELEMENT: int
                                protected static readonly SCANNER_STATE_COMMENT: int
                                protected static readonly SCANNER_STATE_REFERENCE: int
                                protected static readonly SCANNER_STATE_ATTRIBUTE: int
                                protected static readonly SCANNER_STATE_ATTRIBUTE_VALUE: int
                                protected static readonly SCANNER_STATE_END_OF_INPUT: int
                                protected static readonly SCANNER_STATE_TERMINATED: int
                                protected static readonly SCANNER_STATE_CDATA: int
                                protected static readonly SCANNER_STATE_TEXT_DECL: int
                                protected static readonly SCANNER_STATE_CHARACTER_DATA: int
                                protected static readonly SCANNER_STATE_START_ELEMENT_TAG: int
                                protected static readonly SCANNER_STATE_END_ELEMENT_TAG: int
                                protected static readonly SCANNER_STATE_CHAR_REFERENCE: int
                                protected static readonly SCANNER_STATE_BUILT_IN_REFS: int
                                protected static readonly NOTIFY_BUILTIN_REFS: string
                                protected static readonly ENTITY_RESOLVER: string
                                protected static readonly STANDARD_URI_CONFORMANT: string
                                protected static readonly DEBUG_START_END_ELEMENT: boolean
                                protected static readonly DEBUG_NEXT: boolean
                                protected static readonly DEBUG: boolean
                                protected static readonly DEBUG_COALESCE: boolean
                                protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                protected fScannerLastState: int
                                protected fEntityStore: com.sun.xml.internal.stream.XMLEntityStorage
                                protected fEntityStack: int[]
                                protected fMarkupDepth: int
                                protected fEmptyElement: boolean
                                protected fReadingAttributes: boolean
                                protected fScannerState: int
                                protected fInScanContent: boolean
                                protected fLastSectionWasCData: boolean
                                protected fLastSectionWasEntityReference: boolean
                                protected fLastSectionWasCharacterData: boolean
                                protected fHasExternalDTD: boolean
                                protected fStandaloneSet: boolean
                                protected fStandalone: boolean
                                protected fVersion: string
                                protected fCurrentElement: com.sun.org.apache.xerces.internal.xni.QName
                                protected fElementStack: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$ElementStack
                                protected fElementStack2: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$ElementStack2
                                protected fPITarget: string
                                protected fPIData: com.sun.org.apache.xerces.internal.xni.XMLString
                                protected fNotifyBuiltInRefs: boolean
                                protected fSupportDTD: boolean
                                protected fReplaceEntityReferences: boolean
                                protected fSupportExternalEntities: boolean
                                protected fReportCdataEvent: boolean
                                protected fIsCoalesce: boolean
                                protected fDeclaredEncoding: string
                                protected fDisallowDoctype: boolean
                                protected fAccessExternalDTD: string
                                protected fStrictURI: boolean
                                protected fDriver: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
                                protected fContentDriver: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
                                protected fElementQName: com.sun.org.apache.xerces.internal.xni.QName
                                protected fAttributeQName: com.sun.org.apache.xerces.internal.xni.QName
                                protected fAttributes: com.sun.org.apache.xerces.internal.util.XMLAttributesIteratorImpl
                                protected fTempString: com.sun.org.apache.xerces.internal.xni.XMLString
                                protected fTempString2: com.sun.org.apache.xerces.internal.xni.XMLString
                                protected fStringBuffer: com.sun.org.apache.xerces.internal.util.XMLStringBuffer
                                protected fStringBuffer2: com.sun.org.apache.xerces.internal.util.XMLStringBuffer
                                protected fContentBuffer: com.sun.org.apache.xerces.internal.util.XMLStringBuffer
                                protected fScanToEnd: boolean
                                protected dtdGrammarUtil: com.sun.xml.internal.stream.dtd.DTDGrammarUtil
                                protected fAddDefaultAttr: boolean
                                protected foundBuiltInRefs: boolean
                                protected fElementRawname: string
                                protected fShouldSkip: boolean
                                protected fAdd: boolean
                                protected fSkip: boolean
                                protected fUsebuffer: boolean
                                public constructor()
                                public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                public scanDocument(arg0: boolean): boolean
                                public getElementQName(): com.sun.org.apache.xerces.internal.xni.QName
                                public next(): int
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
                                public getRecognizedFeatures(): java.lang.String[]
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public getRecognizedProperties(): java.lang.String[]
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getFeatureDefault(arg0: java.lang.String | string): boolean
                                public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                public setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
                                public getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                public startEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                protected createContentDriver(): com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
                                protected scanXMLDeclOrTextDecl(arg0: boolean): void
                                public getPITarget(): string
                                public getPIData(): com.sun.org.apache.xerces.internal.util.XMLStringBuffer
                                public getCharacterData(): com.sun.org.apache.xerces.internal.xni.XMLString
                                protected scanPIData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): void
                                protected scanComment(): void
                                public getComment(): string
                                protected skipElement(): boolean
                                protected scanStartElement(): boolean
                                protected seekCloseOfStartTag(): boolean
                                public hasAttributes(): boolean
                                public getAttributeIterator(): com.sun.org.apache.xerces.internal.util.XMLAttributesIteratorImpl
                                public standaloneSet(): boolean
                                public isStandAlone(): boolean
                                protected scanAttribute(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                protected scanContent(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): int
                                protected scanCDATASection(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer, arg1: boolean): boolean
                                protected scanEndElement(): int
                                protected scanCharReference(): void
                                protected scanEntityReference(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): void
                                protected setScannerState(arg0: int): void
                                protected setDriver(arg0: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver | com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver$$Lambda): void
                                protected getScannerStateName(arg0: int): string
                                public getEntityName(): string
                                public getDriverName(arg0: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver | com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver$$Lambda): string
                                protected getString(): com.sun.org.apache.xerces.internal.xni.XMLString
                                public refresh(): void
                                public refresh(arg0: int): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}