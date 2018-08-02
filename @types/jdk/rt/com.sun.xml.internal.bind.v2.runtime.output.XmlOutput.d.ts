declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
interface XmlOutput {
    startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: boolean, arg2: int[], arg3: com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl): void
    endDocument(arg0: boolean): void
    beginStartTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
    beginStartTag(arg0: int, arg1: java.lang.String | string): void
    attribute(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.String | string): void
    attribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    endStartTag(): void
    endTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
    endTag(arg0: int, arg1: java.lang.String | string): void
    text(arg0: java.lang.String | string, arg1: boolean): void
    text(arg0: com.sun.xml.internal.bind.v2.runtime.output.Pcdata, arg1: boolean): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}