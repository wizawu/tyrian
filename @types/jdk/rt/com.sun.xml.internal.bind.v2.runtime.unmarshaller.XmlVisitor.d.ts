declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                interface XmlVisitor {
                                    startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx | com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx$$Lambda, arg1: javax.xml.namespace.NamespaceContext): void
                                    endDocument(): void
                                    startElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName): void
                                    endElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName): void
                                    startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    endPrefixMapping(arg0: java.lang.String | string): void
                                    text(arg0: java.lang.CharSequence): void
                                    getContext(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    getPredictor(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor$TextPredictor
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}