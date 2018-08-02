declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
class MutableXMLStreamBuffer extends com.sun.xml.internal.stream.buffer.XMLStreamBuffer {
    public static DEFAULT_ARRAY_SIZE: int
    public constructor()
    public setSystemId(arg0: java.lang.String | string): void
    public constructor(arg0: int)
    public createFromXMLStreamReader(arg0: javax.xml.stream.XMLStreamReader): void
    public createFromXMLStreamWriter(): javax.xml.stream.XMLStreamWriter
    public createFromSAXBufferCreator(): com.sun.xml.internal.stream.buffer.sax.SAXBufferCreator
    public createFromXMLReader(arg0: org.xml.sax.XMLReader, arg1: java.io.InputStream): void
    public createFromXMLReader(arg0: org.xml.sax.XMLReader, arg1: java.io.InputStream, arg2: java.lang.String | string): void
    public reset(): void
    protected setHasInternedStrings(arg0: boolean): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}