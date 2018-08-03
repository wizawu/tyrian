declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                class SAXConnector implements javax.xml.bind.UnmarshallerHandler {
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx | com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx$$Lambda)
                                    public getResult(): java.lang.Object
                                    public getContext(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
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