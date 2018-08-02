declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace marshaller {
class DataWriter extends com.sun.xml.internal.bind.marshaller.XMLWriter {
    public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler | com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler$$Lambda)
    public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string)
    public getIndentStep(): int
    public setIndentStep(arg0: int): void
    public setIndentStep(arg0: java.lang.String | string): void
    public reset(): void
    protected writeXmlDecl(arg0: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endDocument(): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}