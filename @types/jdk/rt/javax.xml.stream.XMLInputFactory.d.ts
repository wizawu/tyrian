declare namespace javax {
    namespace xml {
        namespace stream {
            abstract class XMLInputFactory {
                public static IS_NAMESPACE_AWARE: string
                public static IS_VALIDATING: string
                public static IS_COALESCING: string
                public static IS_REPLACING_ENTITY_REFERENCES: string
                public static IS_SUPPORTING_EXTERNAL_ENTITIES: string
                public static SUPPORT_DTD: string
                public static REPORTER: string
                public static RESOLVER: string
                public static ALLOCATOR: string
                protected constructor()
                public static newInstance(): javax.xml.stream.XMLInputFactory
                public static newFactory(): javax.xml.stream.XMLInputFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                public static newFactory(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                public createXMLStreamReader(arg0: java.io.Reader): javax.xml.stream.XMLStreamReader
                public createXMLStreamReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader
                public createXMLStreamReader(arg0: java.io.InputStream): javax.xml.stream.XMLStreamReader
                public createXMLStreamReader(arg0: java.io.InputStream, arg1: java.lang.String | string): javax.xml.stream.XMLStreamReader
                public createXMLStreamReader(arg0: java.lang.String | string, arg1: java.io.InputStream): javax.xml.stream.XMLStreamReader
                public createXMLStreamReader(arg0: java.lang.String | string, arg1: java.io.Reader): javax.xml.stream.XMLStreamReader
                public createXMLEventReader(arg0: java.io.Reader): javax.xml.stream.XMLEventReader
                public createXMLEventReader(arg0: java.lang.String | string, arg1: java.io.Reader): javax.xml.stream.XMLEventReader
                public createXMLEventReader(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.XMLEventReader
                public createXMLEventReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLEventReader
                public createXMLEventReader(arg0: java.io.InputStream): javax.xml.stream.XMLEventReader
                public createXMLEventReader(arg0: java.io.InputStream, arg1: java.lang.String | string): javax.xml.stream.XMLEventReader
                public createXMLEventReader(arg0: java.lang.String | string, arg1: java.io.InputStream): javax.xml.stream.XMLEventReader
                public createFilteredReader(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.StreamFilter | javax.xml.stream.StreamFilter$$Lambda): javax.xml.stream.XMLStreamReader
                public createFilteredReader(arg0: javax.xml.stream.XMLEventReader, arg1: javax.xml.stream.EventFilter | javax.xml.stream.EventFilter$$Lambda): javax.xml.stream.XMLEventReader
                public getXMLResolver(): javax.xml.stream.XMLResolver
                public setXMLResolver(arg0: javax.xml.stream.XMLResolver | javax.xml.stream.XMLResolver$$Lambda): void
                public getXMLReporter(): javax.xml.stream.XMLReporter
                public setXMLReporter(arg0: javax.xml.stream.XMLReporter | javax.xml.stream.XMLReporter$$Lambda): void
                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public isPropertySupported(arg0: java.lang.String | string): boolean
                public setEventAllocator(arg0: javax.xml.stream.util.XMLEventAllocator): void
                public getEventAllocator(): javax.xml.stream.util.XMLEventAllocator
                public static class: java.lang.Class<any>
            }
        }
    }
}