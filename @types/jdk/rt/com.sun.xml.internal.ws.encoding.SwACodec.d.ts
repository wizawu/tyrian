declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class SwACodec extends com.sun.xml.internal.ws.encoding.MimeCodec {
                            public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.WSFeatureList, arg2: com.sun.xml.internal.ws.api.pipe.Codec)
                            protected decode(arg0: com.sun.xml.internal.ws.encoding.MimeMultipartParser, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.nio.channels.WritableByteChannel): com.sun.xml.internal.ws.api.pipe.ContentType
                            public copy(): com.sun.xml.internal.ws.encoding.SwACodec
                            public copy(): com.sun.xml.internal.ws.encoding.MimeCodec
                            public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                            public decode(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                            public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                            public getMimeType(): string
                            public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}