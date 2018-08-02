declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
class TextSerializer extends com.sun.org.apache.xml.internal.serialize.BaseMarkupSerializer {
    public constructor()
    public setOutputFormat(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
    public endElement(arg0: java.lang.String | string): void
    public endElementIO(arg0: java.lang.String | string): void
    public processingInstructionIO(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public comment(arg0: java.lang.String | string): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    protected characters(arg0: java.lang.String | string, arg1: boolean): void
    protected startDocument(arg0: java.lang.String | string): void
    protected serializeElement(arg0: org.w3c.dom.Element): void
    protected serializeNode(arg0: org.w3c.dom.Node): void
    protected content(): com.sun.org.apache.xml.internal.serialize.ElementState
    protected getEntityRef(arg0: int): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}