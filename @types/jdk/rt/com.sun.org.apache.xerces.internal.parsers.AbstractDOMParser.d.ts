declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class AbstractDOMParser extends com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser {
                                protected static NAMESPACES: string
                                protected static CREATE_ENTITY_REF_NODES: string
                                protected static INCLUDE_COMMENTS_FEATURE: string
                                protected static CREATE_CDATA_NODES_FEATURE: string
                                protected static INCLUDE_IGNORABLE_WHITESPACE: string
                                protected static DEFER_NODE_EXPANSION: string
                                protected static DOCUMENT_CLASS_NAME: string
                                protected static CURRENT_ELEMENT_NODE: string
                                protected static DEFAULT_DOCUMENT_CLASS_NAME: string
                                protected static CORE_DOCUMENT_CLASS_NAME: string
                                protected static PSVI_DOCUMENT_CLASS_NAME: string
                                protected fErrorHandler: com.sun.org.apache.xerces.internal.util.DOMErrorHandlerWrapper
                                protected fInDTD: boolean
                                protected fCreateEntityRefNodes: boolean
                                protected fIncludeIgnorableWhitespace: boolean
                                protected fIncludeComments: boolean
                                protected fCreateCDATANodes: boolean
                                protected fDocument: org.w3c.dom.Document
                                protected fDocumentImpl: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl
                                protected fStorePSVI: boolean
                                protected fDocumentClassName: string
                                protected fDocumentType: org.w3c.dom.DocumentType
                                protected fCurrentNode: org.w3c.dom.Node
                                protected fCurrentCDATASection: org.w3c.dom.CDATASection
                                protected fCurrentEntityDecl: com.sun.org.apache.xerces.internal.dom.EntityImpl
                                protected fDeferredEntityDecl: int
                                protected fStringBuilder: java.lang.StringBuilder
                                protected fInternalSubset: java.lang.StringBuilder
                                protected fDeferNodeExpansion: boolean
                                protected fNamespaceAware: boolean
                                protected fDeferredDocumentImpl: com.sun.org.apache.xerces.internal.dom.DeferredDocumentImpl
                                protected fDocumentIndex: int
                                protected fDocumentTypeIndex: int
                                protected fCurrentNodeIndex: int
                                protected fCurrentCDATASectionIndex: int
                                protected fInDTDExternalSubset: boolean
                                protected fRoot: org.w3c.dom.Node
                                protected fInCDATASection: boolean
                                protected fFirstChunk: boolean
                                protected fFilterReject: boolean
                                protected fBaseURIStack: java.util.Stack
                                protected fRejectedElementDepth: int
                                protected fSkippedElemStack: java.util.Stack
                                protected fInEntityRef: boolean
                                protected fDOMFilter: org.w3c.dom.ls.LSParserFilter
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration)
                                protected getDocumentClassName(): string
                                protected setDocumentClassName(arg0: java.lang.String | string): void
                                public getDocument(): org.w3c.dom.Document
                                public dropDocumentReferences(): void
                                public reset(): void
                                public setLocale(arg0: java.util.Locale): void
                                public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                protected handleBaseURI(arg0: org.w3c.dom.Node): void
                                protected handleBaseURI(arg0: int): void
                                public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public ignoredCharacters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                protected createElementNode(arg0: com.sun.org.apache.xerces.internal.xni.QName): org.w3c.dom.Element
                                protected createAttrNode(arg0: com.sun.org.apache.xerces.internal.xni.QName): org.w3c.dom.Attr
                                protected setCharacterData(arg0: boolean): void
                                public abort(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}