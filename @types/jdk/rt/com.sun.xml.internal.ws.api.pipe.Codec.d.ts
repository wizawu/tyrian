declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            interface Codec {
                                getMimeType(): string
                                getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                                encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                                encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.nio.channels.WritableByteChannel): com.sun.xml.internal.ws.api.pipe.ContentType
                                copy(): com.sun.xml.internal.ws.api.pipe.Codec
                                decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            }
                        }
                    }
                }
            }
        }
    }
}