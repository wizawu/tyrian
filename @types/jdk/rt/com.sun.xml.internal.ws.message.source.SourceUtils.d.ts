declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace source {
class SourceUtils {
    public constructor(arg0: javax.xml.transform.Source)
    public isDOMSource(): boolean
    public isStreamSource(): boolean
    public isSaxSource(): boolean
    public sniff(arg0: javax.xml.transform.Source): javax.xml.namespace.QName
    public sniff(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.message.RootElementSniffer): javax.xml.namespace.QName
    public static serializeSource(arg0: javax.xml.transform.Source, arg1: javax.xml.stream.XMLStreamWriter): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}