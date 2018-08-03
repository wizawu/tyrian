declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            abstract class HttpMetadataPublisher {
                                public constructor()
                                public abstract handleMetadataRequest(arg0: com.sun.xml.internal.ws.transport.http.HttpAdapter, arg1: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): boolean
                                public static class: java.lang.Class<any>
                            }
                            interface HttpMetadataPublisher$$Lambda {
                                (arg0: com.sun.xml.internal.ws.transport.http.HttpAdapter, arg1: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}