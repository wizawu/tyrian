declare namespace javax {
    namespace xml {
        namespace stream {
            abstract class XMLOutputFactory {
                public static readonly IS_REPAIRING_NAMESPACES: string
                protected constructor()
                public static newInstance(): javax.xml.stream.XMLOutputFactory
                public static newFactory(): javax.xml.stream.XMLOutputFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                public static newFactory(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLOutputFactory
                public abstract createXMLStreamWriter(arg0: java.io.Writer): javax.xml.stream.XMLStreamWriter
                public abstract createXMLStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.stream.XMLStreamWriter
                public abstract createXMLStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLStreamWriter
                public abstract createXMLStreamWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLStreamWriter
                public abstract createXMLEventWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLEventWriter
                public abstract createXMLEventWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.stream.XMLEventWriter
                public abstract createXMLEventWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLEventWriter
                public abstract createXMLEventWriter(arg0: java.io.Writer): javax.xml.stream.XMLEventWriter
                public abstract setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public abstract getProperty(arg0: java.lang.String | string): java.lang.Object
                public abstract isPropertySupported(arg0: java.lang.String | string): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}