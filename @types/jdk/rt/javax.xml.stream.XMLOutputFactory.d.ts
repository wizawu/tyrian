declare namespace javax {
    namespace xml {
        namespace stream {
            abstract class XMLOutputFactory {
                public static IS_REPAIRING_NAMESPACES: string
                protected constructor()
                public static newInstance(): javax.xml.stream.XMLOutputFactory
                public static newFactory(): javax.xml.stream.XMLOutputFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                public static newFactory(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLOutputFactory
                public createXMLStreamWriter(arg0: java.io.Writer): javax.xml.stream.XMLStreamWriter
                public createXMLStreamWriter(arg0: java.io.OutputStream): javax.xml.stream.XMLStreamWriter
                public createXMLStreamWriter(arg0: java.io.OutputStream, arg1: java.lang.String | string): javax.xml.stream.XMLStreamWriter
                public createXMLStreamWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLStreamWriter
                public createXMLEventWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLEventWriter
                public createXMLEventWriter(arg0: java.io.OutputStream): javax.xml.stream.XMLEventWriter
                public createXMLEventWriter(arg0: java.io.OutputStream, arg1: java.lang.String | string): javax.xml.stream.XMLEventWriter
                public createXMLEventWriter(arg0: java.io.Writer): javax.xml.stream.XMLEventWriter
                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public isPropertySupported(arg0: java.lang.String | string): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}