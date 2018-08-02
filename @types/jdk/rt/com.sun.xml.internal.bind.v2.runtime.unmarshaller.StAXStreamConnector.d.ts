declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
class StAXStreamConnector extends com.sun.xml.internal.bind.v2.runtime.unmarshaller.StAXConnector {
    protected buffer: java.lang.StringBuilder
    protected textReported: boolean
    public static create(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor): com.sun.xml.internal.bind.v2.runtime.unmarshaller.StAXConnector
    protected constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor)
    public bridge(): void
    protected getCurrentLocation(): javax.xml.stream.Location
    protected getCurrentQName(): string
    protected handleCharacters(): void
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