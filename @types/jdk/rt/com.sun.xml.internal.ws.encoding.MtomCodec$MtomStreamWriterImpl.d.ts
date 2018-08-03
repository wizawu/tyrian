declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class MtomCodec$MtomStreamWriterImpl extends com.sun.xml.internal.ws.util.xml.XMLStreamWriterFilter implements com.sun.xml.internal.org.jvnet.staxex.XMLStreamWriterEx , com.sun.xml.internal.ws.streaming.MtomStreamWriter , com.sun.xml.internal.ws.encoding.HasEncoding {
                            public constructor(arg0: javax.xml.stream.XMLStreamWriter, arg1: java.util.List<com.sun.xml.internal.ws.encoding.MtomCodec$ByteArrayBuffer>, arg2: java.lang.String | string, arg3: javax.xml.ws.soap.MTOMFeature)
                            public writeBinary(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string): void
                            public writeBinary(arg0: javax.activation.DataHandler): void
                            public writeBinary(arg0: java.lang.String | string): java.io.OutputStream
                            public writePCDATA(arg0: java.lang.CharSequence): void
                            public getProperty(arg0: java.lang.String | string): java.lang.Object
                            public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller
                            public getMtomAttachments(): java.util.List<com.sun.xml.internal.ws.encoding.MtomCodec$ByteArrayBuffer>
                            public getEncoding(): string
                            public getNamespaceContext(): com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx
                            public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}