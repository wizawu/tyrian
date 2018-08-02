declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class ToXMLSAXHandler extends com.sun.org.apache.xml.internal.serializer.ToSAXHandler {
                                protected m_escapeSetting: boolean
                                public constructor()
                                public getOutputFormat(): java.util.Properties
                                public getOutputStream(): java.io.OutputStream
                                public getWriter(): java.io.Writer
                                public indent(arg0: int): void
                                public serialize(arg0: org.w3c.dom.Node): void
                                public setEscaping(arg0: boolean): boolean
                                public setOutputFormat(arg0: java.util.Properties): void
                                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public endDocument(): void
                                protected closeStartTag(): void
                                public closeCDATA(): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
                                public comment(arg0: char[], arg1: int, arg2: int): void
                                public endCDATA(): void
                                public endDTD(): void
                                public startEntity(arg0: java.lang.String | string): void
                                public characters(arg0: java.lang.String | string): void
                                public constructor(arg0: org.xml.sax.ContentHandler, arg1: java.lang.String | string)
                                public constructor(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ext.LexicalHandler, arg2: java.lang.String | string)
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public endElement(arg0: java.lang.String | string): void
                                public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                protected popNamespace(arg0: java.lang.String | string): boolean
                                public startCDATA(): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): void
                                public reset(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}