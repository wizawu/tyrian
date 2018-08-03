declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            interface MessageWritable {
                                getContentType(): com.oracle.webservices.internal.api.message.ContentType
                                writeTo(arg0: java.io.OutputStream): com.oracle.webservices.internal.api.message.ContentType
                                setMTOMConfiguration(arg0: javax.xml.ws.soap.MTOMFeature): void
                            }
                        }
                    }
                }
            }
        }
    }
}