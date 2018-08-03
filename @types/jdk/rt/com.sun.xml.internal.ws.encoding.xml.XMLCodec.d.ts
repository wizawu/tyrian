declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace xml {
                            class XMLCodec implements com.sun.xml.internal.ws.api.pipe.Codec {
                                public static XML_APPLICATION_MIME_TYPE: string
                                public static XML_TEXT_MIME_TYPE: string
                                public constructor(arg0: com.sun.xml.internal.ws.api.WSFeatureList)
                                public getMimeType(): string
                                public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                                public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                                public decode(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                public decode(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}