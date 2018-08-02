declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class ToHTMLStream extends com.sun.org.apache.xml.internal.serializer.ToStream {
                                protected m_inDTD: boolean
                                public setSpecialEscapeURLs(arg0: boolean): void
                                public setOmitMetaTag(arg0: boolean): void
                                public setOutputFormat(arg0: java.util.Properties): void
                                public static getElemDesc(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.serializer.ElemDesc
                                public constructor()
                                protected startDocumentInternal(): void
                                public endDocument(): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                protected processAttribute(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xml.internal.serializer.ElemDesc): void
                                public writeAttrURI(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string, arg2: boolean): void
                                public writeAttrString(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public cdata(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public entityReference(arg0: java.lang.String | string): void
                                public endElement(arg0: java.lang.String | string): void
                                public processAttributes(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: int): void
                                protected closeStartTag(): void
                                protected init(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.Properties): void
                                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endDTD(): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
                                public comment(arg0: char[], arg1: int, arg2: int): void
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