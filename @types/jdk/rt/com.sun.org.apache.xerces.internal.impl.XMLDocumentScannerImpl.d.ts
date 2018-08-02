declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XMLDocumentScannerImpl extends com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl {
    protected static SCANNER_STATE_XML_DECL: int
    protected static SCANNER_STATE_PROLOG: int
    protected static SCANNER_STATE_TRAILING_MISC: int
    protected static SCANNER_STATE_DTD_INTERNAL_DECLS: int
    protected static SCANNER_STATE_DTD_EXTERNAL: int
    protected static SCANNER_STATE_DTD_EXTERNAL_DECLS: int
    protected static SCANNER_STATE_NO_SUCH_ELEMENT_EXCEPTION: int
    protected static DOCUMENT_SCANNER: string
    protected static LOAD_EXTERNAL_DTD: string
    protected static DISALLOW_DOCTYPE_DECL_FEATURE: string
    protected static DTD_SCANNER: string
    protected static VALIDATION_MANAGER: string
    protected static NAMESPACE_CONTEXT: string
    protected fDTDScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
    protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
    protected fDTDDecl: com.sun.org.apache.xerces.internal.util.XMLStringBuffer
    protected fReadingDTD: boolean
    protected fAddedListener: boolean
    protected fDoctypeName: string
    protected fDoctypePublicId: string
    protected fDoctypeSystemId: string
    protected fNamespaceContext: com.sun.org.apache.xerces.internal.xni.NamespaceContext
    protected fLoadExternalDTD: boolean
    protected fSeenDoctypeDecl: boolean
    protected fScanEndElement: boolean
    protected fXMLDeclDriver: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    protected fPrologDriver: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    protected fDTDDriver: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    protected fTrailingMiscDriver: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    protected fStartPos: int
    protected fEndPos: int
    protected fSeenInternalSubset: boolean
    public constructor()
    public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    public getScannetState(): int
    public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
    public getRecognizedFeatures(): java.lang.String[]
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getRecognizedProperties(): java.lang.String[]
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getFeatureDefault(arg0: java.lang.String | string): boolean
    public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
    public startEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public getDTDDecl(): com.sun.org.apache.xerces.internal.util.XMLStringBuffer
    public getCharacterEncodingScheme(): string
    public next(): int
    public getNamespaceContext(): com.sun.org.apache.xerces.internal.xni.NamespaceContext
    protected createContentDriver(): com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    protected scanDoctypeDecl(arg0: boolean): boolean
    protected setEndDTDScanState(): void
    protected getScannerStateName(arg0: int): string
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