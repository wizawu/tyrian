declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class ToXMLStream extends com.sun.org.apache.xml.internal.serializer.ToStream {
                                public constructor()
                                public CopyFrom(arg0: com.sun.org.apache.xml.internal.serializer.ToXMLStream): void
                                public startDocumentInternal(): void
                                public endDocument(): void
                                public startPreserving(): void
                                public endPreserving(): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public entityReference(arg0: java.lang.String | string): void
                                public addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): void
                                public endElement(arg0: java.lang.String | string): void
                                public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                protected pushNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
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