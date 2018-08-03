declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace xml {
                            class XMLCodec implements com.sun.xml.internal.ws.api.pipe.Codec {
                                public static readonly XML_APPLICATION_MIME_TYPE: string
                                public static readonly XML_TEXT_MIME_TYPE: string
                                public constructor(arg0: com.sun.xml.internal.ws.api.WSFeatureList)
                                public getMimeType(): string
                                public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.nio.channels.WritableByteChannel): com.sun.xml.internal.ws.api.pipe.ContentType
                                public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                                public decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}