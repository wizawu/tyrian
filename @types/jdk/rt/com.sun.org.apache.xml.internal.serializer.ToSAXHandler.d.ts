declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
abstract class ToSAXHandler extends com.sun.org.apache.xml.internal.serializer.SerializerBase {
    protected m_saxHandler: org.xml.sax.ContentHandler
    protected m_lexHandler: org.xml.sax.ext.LexicalHandler
    protected m_state: com.sun.org.apache.xml.internal.serializer.TransformStateSetter
    public constructor()
    public constructor(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ext.LexicalHandler, arg2: java.lang.String | string)
    public constructor(arg0: org.xml.sax.ContentHandler, arg1: java.lang.String | string)
    protected startDocumentInternal(): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: java.lang.String | string): void
    public comment(arg0: java.lang.String | string): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected closeStartTag(): void
    protected closeCDATA(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public setLexHandler(arg0: org.xml.sax.ext.LexicalHandler): void
    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
    public setCdataSectionElements(arg0: java.util.Vector): void
    public setShouldOutputNSAttr(arg0: boolean): void
    public flushPending(): void
    public setTransformState(arg0: com.sun.org.apache.xml.internal.serializer.TransformStateSetter): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string): void
    public characters(arg0: org.w3c.dom.Node): void
    public fatalError(arg0: org.xml.sax.SAXParseException): void
    public error(arg0: org.xml.sax.SAXParseException): void
    public warning(arg0: org.xml.sax.SAXParseException): void
    public reset(): boolean
    public addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}