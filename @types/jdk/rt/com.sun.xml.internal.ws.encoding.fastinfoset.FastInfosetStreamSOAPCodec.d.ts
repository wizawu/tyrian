declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace fastinfoset {
                            abstract class FastInfosetStreamSOAPCodec implements com.sun.xml.internal.ws.api.pipe.Codec {
                                protected readonly _defaultContentType: com.sun.xml.internal.ws.api.pipe.ContentType
                                public getMimeType(): string
                                public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                                public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.nio.channels.WritableByteChannel): com.sun.xml.internal.ws.api.pipe.ContentType
                                public decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                protected abstract createHeader(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): com.sun.xml.internal.ws.message.stream.StreamHeader
                                protected abstract getContentType(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.pipe.ContentType
                                public static create(arg0: com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.encoding.fastinfoset.FastInfosetStreamSOAPCodec
                                public static create(arg0: com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec, arg1: com.sun.xml.internal.ws.api.SOAPVersion, arg2: boolean): com.sun.xml.internal.ws.encoding.fastinfoset.FastInfosetStreamSOAPCodec
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}