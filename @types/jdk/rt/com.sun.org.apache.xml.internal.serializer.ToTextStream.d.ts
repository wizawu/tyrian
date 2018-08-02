declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class ToTextStream extends com.sun.org.apache.xml.internal.serializer.ToStream {
                                public constructor()
                                protected startDocumentInternal(): void
                                public endDocument(): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public charactersRaw(arg0: char[], arg1: int, arg2: int): void
                                public cdata(arg0: char[], arg1: int, arg2: int): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public comment(arg0: java.lang.String | string): void
                                public comment(arg0: char[], arg1: int, arg2: int): void
                                public entityReference(arg0: java.lang.String | string): void
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): void
                                public endCDATA(): void
                                public endElement(arg0: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public characters(arg0: java.lang.String | string): void
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public flushPending(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}