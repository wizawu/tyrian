declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace factory {
                            class StAXOutputFactory extends javax.xml.stream.XMLOutputFactory {
                                public constructor()
                                public createXMLEventWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLEventWriter
                                public createXMLEventWriter(arg0: java.io.Writer): javax.xml.stream.XMLEventWriter
                                public createXMLEventWriter(arg0: java.io.OutputStream): javax.xml.stream.XMLEventWriter
                                public createXMLEventWriter(arg0: java.io.OutputStream, arg1: java.lang.String | string): javax.xml.stream.XMLEventWriter
                                public createXMLStreamWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLStreamWriter
                                public createXMLStreamWriter(arg0: java.io.Writer): javax.xml.stream.XMLStreamWriter
                                public createXMLStreamWriter(arg0: java.io.OutputStream): javax.xml.stream.XMLStreamWriter
                                public createXMLStreamWriter(arg0: java.io.OutputStream, arg1: java.lang.String | string): javax.xml.stream.XMLStreamWriter
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public isPropertySupported(arg0: java.lang.String | string): boolean
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}