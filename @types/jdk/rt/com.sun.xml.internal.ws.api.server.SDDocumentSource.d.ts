declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class SDDocumentSource {
                                public constructor()
                                public abstract read(arg0: javax.xml.stream.XMLInputFactory): javax.xml.stream.XMLStreamReader
                                public abstract read(): javax.xml.stream.XMLStreamReader
                                public abstract getSystemId(): java.net.URL
                                public static create(arg0: java.net.URL): com.sun.xml.internal.ws.api.server.SDDocumentSource
                                public static create(arg0: java.net.URL, arg1: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): com.sun.xml.internal.ws.api.server.SDDocumentSource
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}