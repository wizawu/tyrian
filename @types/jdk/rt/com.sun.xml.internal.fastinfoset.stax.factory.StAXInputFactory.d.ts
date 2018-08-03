declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace factory {
                            class StAXInputFactory extends javax.xml.stream.XMLInputFactory {
                                public constructor()
                                public static newInstance(): javax.xml.stream.XMLInputFactory
                                public createXMLStreamReader(arg0: java.io.Reader): javax.xml.stream.XMLStreamReader
                                public createXMLStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLStreamReader
                                public createXMLStreamReader(arg0: java.lang.String | string, arg1: java.io.Reader): javax.xml.stream.XMLStreamReader
                                public createXMLStreamReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader
                                public createXMLStreamReader(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLStreamReader
                                public createXMLStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLStreamReader
                                public createXMLEventReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLEventReader
                                public createXMLEventReader(arg0: java.io.Reader): javax.xml.stream.XMLEventReader
                                public createXMLEventReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLEventReader
                                public createXMLEventReader(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLEventReader
                                public createXMLEventReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLEventReader
                                public createXMLEventReader(arg0: java.lang.String | string, arg1: java.io.Reader): javax.xml.stream.XMLEventReader
                                public createXMLEventReader(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.XMLEventReader
                                public getEventAllocator(): javax.xml.stream.util.XMLEventAllocator
                                public getXMLReporter(): javax.xml.stream.XMLReporter
                                public getXMLResolver(): javax.xml.stream.XMLResolver
                                public setXMLReporter(arg0: javax.xml.stream.XMLReporter | javax.xml.stream.XMLReporter$$Lambda): void
                                public setXMLResolver(arg0: javax.xml.stream.XMLResolver | javax.xml.stream.XMLResolver$$Lambda): void
                                public createFilteredReader(arg0: javax.xml.stream.XMLEventReader, arg1: javax.xml.stream.EventFilter | javax.xml.stream.EventFilter$$Lambda): javax.xml.stream.XMLEventReader
                                public createFilteredReader(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.StreamFilter | javax.xml.stream.StreamFilter$$Lambda): javax.xml.stream.XMLStreamReader
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public isPropertySupported(arg0: java.lang.String | string): boolean
                                public setEventAllocator(arg0: javax.xml.stream.util.XMLEventAllocator): void
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