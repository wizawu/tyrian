declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
class XMLStreamBufferResult extends javax.xml.transform.sax.SAXResult {
    protected _buffer: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer
    protected _bufferCreator: com.sun.xml.internal.stream.buffer.sax.SAXBufferCreator
    public constructor()
    public constructor(arg0: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer)
    public getXMLStreamBuffer(): com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer
    public setXMLStreamBuffer(arg0: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer): void
    public getHandler(): org.xml.sax.ContentHandler
    public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}