declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
class SAX2StAXEventWriter extends com.sun.org.apache.xalan.internal.xsltc.trax.SAX2StAXBaseWriter {
    public constructor()
    public constructor(arg0: javax.xml.stream.XMLEventWriter)
    public constructor(arg0: javax.xml.stream.XMLEventWriter, arg1: javax.xml.stream.XMLEventFactory)
    public getEventWriter(): javax.xml.stream.XMLEventWriter
    public setEventWriter(arg0: javax.xml.stream.XMLEventWriter): void
    public getEventFactory(): javax.xml.stream.XMLEventFactory
    public setEventFactory(arg0: javax.xml.stream.XMLEventFactory): void
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endCDATA(): void
    protected createStartEvents(arg0: org.xml.sax.Attributes, arg1: java.util.Collection[]): void
    protected createNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.Namespace
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}