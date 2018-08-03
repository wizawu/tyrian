declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        abstract class MimeCodec implements com.sun.xml.internal.ws.api.pipe.Codec {
                            public static readonly MULTIPART_RELATED_MIME_TYPE: string
                            protected mimeRootCodec: com.sun.xml.internal.ws.api.pipe.Codec
                            protected readonly version: com.sun.xml.internal.ws.api.SOAPVersion
                            protected readonly features: com.sun.xml.internal.ws.api.WSFeatureList
                            protected constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.WSFeatureList)
                            public getMimeType(): string
                            protected getMimeRootCodec(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.Codec
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                            public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                            protected constructor(arg0: com.sun.xml.internal.ws.encoding.MimeCodec)
                            public decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            public decode(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            protected abstract decode(arg0: com.sun.xml.internal.ws.encoding.MimeMultipartParser, arg1: com.sun.xml.internal.ws.api.message.Packet): void
                            public abstract copy(): com.sun.xml.internal.ws.encoding.MimeCodec
                            public static writeln(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public static writeAsAscii(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public static writeln(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}