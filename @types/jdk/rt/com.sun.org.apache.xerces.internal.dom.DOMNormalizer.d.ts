declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class DOMNormalizer implements com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler {
                                protected static DEBUG_ND: boolean
                                protected static DEBUG: boolean
                                protected static DEBUG_EVENTS: boolean
                                protected static PREFIX: string
                                protected fConfiguration: com.sun.org.apache.xerces.internal.dom.DOMConfigurationImpl
                                protected fDocument: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl
                                protected fAttrProxy: com.sun.org.apache.xerces.internal.dom.DOMNormalizer$XMLAttributesProxy
                                protected fQName: com.sun.org.apache.xerces.internal.xni.QName
                                protected fValidationHandler: com.sun.org.apache.xerces.internal.impl.RevalidationHandler
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fErrorHandler: org.w3c.dom.DOMErrorHandler
                                protected fNamespaceValidation: boolean
                                protected fPSVI: boolean
                                protected fNamespaceContext: com.sun.org.apache.xerces.internal.xni.NamespaceContext
                                protected fLocalNSBinder: com.sun.org.apache.xerces.internal.xni.NamespaceContext
                                protected fAttributeList: java.util.ArrayList
                                protected fLocator: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl
                                protected fCurrentNode: org.w3c.dom.Node
                                public constructor()
                                protected normalizeDocument(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: com.sun.org.apache.xerces.internal.dom.DOMConfigurationImpl): void
                                protected normalizeNode(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                protected expandEntityRef(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                                protected namespaceFixUp(arg0: com.sun.org.apache.xerces.internal.dom.ElementImpl, arg1: com.sun.org.apache.xerces.internal.dom.AttributeMap): void
                                protected addNamespaceDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.dom.ElementImpl): void
                                public static isCDataWF(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda, arg1: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl, arg2: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl, arg3: java.lang.String | string, arg4: boolean): void
                                public static isXMLCharWF(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda, arg1: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl, arg2: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl, arg3: java.lang.String | string, arg4: boolean): void
                                public static isCommentWF(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda, arg1: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl, arg2: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl, arg3: java.lang.String | string, arg4: boolean): void
                                public static isAttrValueWF(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda, arg1: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl, arg2: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl, arg3: org.w3c.dom.NamedNodeMap, arg4: org.w3c.dom.Attr, arg5: java.lang.String | string, arg6: boolean): void
                                public static reportDOMError(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda, arg1: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl, arg2: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl, arg3: java.lang.String | string, arg4: short, arg5: java.lang.String | string): void
                                protected updateQName(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
                                public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public setDocumentSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource): void
                                public getDocumentSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}