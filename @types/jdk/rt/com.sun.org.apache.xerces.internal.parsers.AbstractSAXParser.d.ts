declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            abstract class AbstractSAXParser extends com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser implements com.sun.org.apache.xerces.internal.xs.PSVIProvider , org.xml.sax.Parser , org.xml.sax.XMLReader {
                                protected static readonly NAMESPACES: string
                                protected static readonly NAMESPACE_PREFIXES: string
                                protected static readonly STRING_INTERNING: string
                                protected static readonly ALLOW_UE_AND_NOTATION_EVENTS: string
                                protected static readonly LEXICAL_HANDLER: string
                                protected static readonly DECLARATION_HANDLER: string
                                protected static readonly DOM_NODE: string
                                protected fNamespaces: boolean
                                protected fNamespacePrefixes: boolean
                                protected fLexicalHandlerParameterEntities: boolean
                                protected fStandalone: boolean
                                protected fResolveDTDURIs: boolean
                                protected fUseEntityResolver2: boolean
                                protected fXMLNSURIs: boolean
                                protected fContentHandler: org.xml.sax.ContentHandler
                                protected fDocumentHandler: org.xml.sax.DocumentHandler
                                protected fNamespaceContext: com.sun.org.apache.xerces.internal.xni.NamespaceContext
                                protected fDTDHandler: org.xml.sax.DTDHandler
                                protected fDeclHandler: org.xml.sax.ext.DeclHandler
                                protected fLexicalHandler: org.xml.sax.ext.LexicalHandler
                                protected fQName: com.sun.org.apache.xerces.internal.xni.QName
                                protected fParseInProgress: boolean
                                protected fVersion: string
                                protected fDeclaredAttrs: com.sun.org.apache.xerces.internal.util.SymbolHash
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration)
                                public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public parse(arg0: java.lang.String | string): void
                                public parse(arg0: org.xml.sax.InputSource): void
                                public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                                public getEntityResolver(): org.xml.sax.EntityResolver
                                public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                                public getErrorHandler(): org.xml.sax.ErrorHandler
                                public setLocale(arg0: java.util.Locale): void
                                public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                                public setDocumentHandler(arg0: org.xml.sax.DocumentHandler): void
                                public setContentHandler(arg0: org.xml.sax.ContentHandler): void
                                public getContentHandler(): org.xml.sax.ContentHandler
                                public getDTDHandler(): org.xml.sax.DTDHandler
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public getFeature(arg0: java.lang.String | string): boolean
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                protected setDeclHandler(arg0: org.xml.sax.ext.DeclHandler): void
                                protected getDeclHandler(): org.xml.sax.ext.DeclHandler
                                protected setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                                protected getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                                protected startNamespaceMapping(): void
                                protected endNamespaceMapping(): void
                                public reset(): void
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