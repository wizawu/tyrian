declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class StreamSOAP12Codec extends com.sun.xml.internal.ws.encoding.StreamSOAPCodec {
                            public static readonly SOAP12_MIME_TYPE: string
                            public static readonly DEFAULT_SOAP12_CONTENT_TYPE: string
                            public getMimeType(): string
                            protected getContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                            public decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet, arg3: com.sun.xml.internal.ws.api.message.AttachmentSet): void
                            protected getExpectedContentTypes(): java.util.List<java.lang.String>
                            protected getDefaultContentType(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}