declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        abstract class StreamSOAPCodec implements com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec , com.sun.xml.internal.ws.encoding.RootOnlyCodec {
                            protected readonly serializationFeature: com.sun.xml.internal.ws.developer.SerializationFeature
                            public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                            protected abstract getContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                            protected abstract getDefaultContentType(): string
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.nio.channels.WritableByteChannel): com.sun.xml.internal.ws.api.pipe.ContentType
                            protected abstract getExpectedContentTypes(): java.util.List<java.lang.String>
                            public decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            public decode(arg0: javax.xml.stream.XMLStreamReader): com.sun.xml.internal.ws.api.message.Message
                            public decode(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.message.AttachmentSet): com.sun.xml.internal.ws.api.message.Message
                            public static decode(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.stream.XMLStreamReader, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet): com.sun.xml.internal.ws.api.message.Message
                            public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            public copy(): com.sun.xml.internal.ws.encoding.StreamSOAPCodec
                            public decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet, arg3: com.sun.xml.internal.ws.api.message.AttachmentSet): void
                            public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet, arg3: com.sun.xml.internal.ws.api.message.AttachmentSet): void
                            public static create(arg0: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.encoding.StreamSOAPCodec
                            public static create(arg0: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.encoding.StreamSOAPCodec
                            public static create(arg0: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.encoding.StreamSOAPCodec
                            protected getContenTypeBuilder(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.encoding.ContentTypeImpl$Builder
                            public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}