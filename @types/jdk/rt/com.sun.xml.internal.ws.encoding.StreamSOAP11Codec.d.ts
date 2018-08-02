declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class StreamSOAP11Codec extends com.sun.xml.internal.ws.encoding.StreamSOAPCodec {
                            public static SOAP11_MIME_TYPE: string
                            public static DEFAULT_SOAP11_CONTENT_TYPE: string
                            public getMimeType(): string
                            protected getContentType(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                            protected getDefaultContentType(): string
                            protected getExpectedContentTypes(): java.util.List<java.lang.String>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}