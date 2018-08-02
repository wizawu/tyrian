declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            abstract class BaseMarkupSerializer implements org.xml.sax.ContentHandler , org.xml.sax.DocumentHandler , org.xml.sax.ext.LexicalHandler , org.xml.sax.DTDHandler , org.xml.sax.ext.DeclHandler , com.sun.org.apache.xml.internal.serialize.DOMSerializer , com.sun.org.apache.xml.internal.serialize.Serializer {
                                protected features: short
                                protected fDOMErrorHandler: org.w3c.dom.DOMErrorHandler
                                protected fDOMError: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl
                                protected fDOMFilter: org.w3c.dom.ls.LSSerializerFilter
                                protected _encodingInfo: com.sun.org.apache.xml.internal.serialize.EncodingInfo
                                protected _started: boolean
                                protected _prefixes: java.util.Map<java.lang.String, java.lang.String>
                                protected _docTypePublicId: string
                                protected _docTypeSystemId: string
                                protected _format: com.sun.org.apache.xml.internal.serialize.OutputFormat
                                protected _printer: com.sun.org.apache.xml.internal.serialize.Printer
                                protected _indenting: boolean
                                protected fStrBuffer: java.lang.StringBuffer
                                protected fCurrentNode: org.w3c.dom.Node
                                protected constructor(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public asDocumentHandler(): org.xml.sax.DocumentHandler
                                public asContentHandler(): org.xml.sax.ContentHandler
                                public asDOMSerializer(): com.sun.org.apache.xml.internal.serialize.DOMSerializer
                                public setOutputByteStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public setOutputCharStream(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                                public setOutputFormat(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat): void
                                public reset(): boolean
                                protected prepare(): void
                                public serialize(arg0: org.w3c.dom.Element): void
                                public serialize(arg0: org.w3c.dom.Node): void
                                public serialize(arg0: org.w3c.dom.DocumentFragment): void
                                public serialize(arg0: org.w3c.dom.Document): void
                                public startDocument(): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public processingInstructionIO(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public comment(arg0: char[], arg1: int, arg2: int): void
                                public comment(arg0: java.lang.String | string): void
                                public startCDATA(): void
                                public endCDATA(): void
                                public startNonEscaping(): void
                                public endNonEscaping(): void
                                public startPreserving(): void
                                public endPreserving(): void
                                public endDocument(): void
                                public startEntity(arg0: java.lang.String | string): void
                                public endEntity(arg0: java.lang.String | string): void
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endDTD(): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                protected serializeNode(arg0: org.w3c.dom.Node): void
                                protected serializeDocument(): void
                                protected serializeDTD(arg0: java.lang.String | string): void
                                protected content(): com.sun.org.apache.xml.internal.serialize.ElementState
                                protected characters(arg0: java.lang.String | string): void
                                protected getEntityRef(arg0: int): string
                                protected serializeElement(arg0: org.w3c.dom.Element): void
                                protected serializePreRoot(): void
                                protected printCDATAText(arg0: java.lang.String | string): void
                                protected surrogates(arg0: int, arg1: int): void
                                protected printText(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: boolean): void
                                protected printText(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                                protected printDoctypeURL(arg0: java.lang.String | string): void
                                protected printEscaped(arg0: int): void
                                protected printEscaped(arg0: java.lang.String | string): void
                                protected getElementState(): com.sun.org.apache.xml.internal.serialize.ElementState
                                protected enterElementState(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): com.sun.org.apache.xml.internal.serialize.ElementState
                                protected leaveElementState(): com.sun.org.apache.xml.internal.serialize.ElementState
                                protected isDocumentState(): boolean
                                protected getPrefix(arg0: java.lang.String | string): string
                                protected modifyDOMError(arg0: java.lang.String | string, arg1: short, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): org.w3c.dom.DOMError
                                protected fatalError(arg0: java.lang.String | string): void
                                protected checkUnboundNamespacePrefixedNode(arg0: org.w3c.dom.Node): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}