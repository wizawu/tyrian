declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace fastinfoset {
                            class FastInfosetCodec implements com.sun.xml.internal.ws.api.pipe.Codec {
                                public getMimeType(): string
                                public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                                public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.nio.channels.WritableByteChannel): com.sun.xml.internal.ws.api.pipe.ContentType
                                public decode(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public static create(): com.sun.xml.internal.ws.encoding.fastinfoset.FastInfosetCodec
                                public static create(arg0: boolean): com.sun.xml.internal.ws.encoding.fastinfoset.FastInfosetCodec
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}