declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                class XMLEventWriterOutput extends com.sun.xml.internal.bind.v2.runtime.output.XmlOutputAbstractImpl {
                                    public constructor(arg0: javax.xml.stream.XMLEventWriter)
                                    public startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: boolean, arg2: int[], arg3: com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl): void
                                    public endDocument(arg0: boolean): void
                                    public beginStartTag(arg0: int, arg1: java.lang.String | string): void
                                    public attribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public endStartTag(): void
                                    public endTag(arg0: int, arg1: java.lang.String | string): void
                                    public text(arg0: java.lang.String | string, arg1: boolean): void
                                    public text(arg0: com.sun.xml.internal.bind.v2.runtime.output.Pcdata, arg1: boolean): void
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