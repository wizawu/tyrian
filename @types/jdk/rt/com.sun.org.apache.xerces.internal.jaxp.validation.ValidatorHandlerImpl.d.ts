declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
                                class ValidatorHandlerImpl extends javax.xml.validation.ValidatorHandler implements org.xml.sax.DTDHandler , com.sun.org.apache.xerces.internal.impl.validation.EntityState , com.sun.org.apache.xerces.internal.xs.PSVIProvider , com.sun.org.apache.xerces.internal.jaxp.validation.ValidatorHelper , com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler {
                                    protected static readonly STRING_INTERNING: string
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.jaxp.validation.XSGrammarPoolContainer)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.jaxp.validation.XMLSchemaValidatorComponentManager)
                                    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
                                    public getContentHandler(): org.xml.sax.ContentHandler
                                    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                                    public getErrorHandler(): org.xml.sax.ErrorHandler
                                    public setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
                                    public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
                                    public getTypeInfoProvider(): javax.xml.validation.TypeInfoProvider
                                    public getFeature(arg0: java.lang.String | string): boolean
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public isEntityDeclared(arg0: java.lang.String | string): boolean
                                    public isEntityUnparsed(arg0: java.lang.String | string): boolean
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
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public skippedEntity(arg0: java.lang.String | string): void
                                    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                    public validate(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
                                    public getElementPSVI(): com.sun.org.apache.xerces.internal.xs.ElementPSVI
                                    public getAttributePSVI(arg0: int): com.sun.org.apache.xerces.internal.xs.AttributePSVI
                                    public getAttributePSVIByName(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.AttributePSVI
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