declare namespace javax {
    namespace xml {
        namespace stream {
            abstract class XMLInputFactory {
                public static readonly IS_NAMESPACE_AWARE: string
                public static readonly IS_VALIDATING: string
                public static readonly IS_COALESCING: string
                public static readonly IS_REPLACING_ENTITY_REFERENCES: string
                public static readonly IS_SUPPORTING_EXTERNAL_ENTITIES: string
                public static readonly SUPPORT_DTD: string
                public static readonly REPORTER: string
                public static readonly RESOLVER: string
                public static readonly ALLOCATOR: string
                protected constructor()
                public static newInstance(): javax.xml.stream.XMLInputFactory
                public static newFactory(): javax.xml.stream.XMLInputFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                public static newFactory(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                public abstract createXMLStreamReader(arg0: java.io.Reader): javax.xml.stream.XMLStreamReader
                public abstract createXMLStreamReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader
                public abstract createXMLStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLStreamReader
                public abstract createXMLStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLStreamReader
                public abstract createXMLStreamReader(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLStreamReader
                public abstract createXMLStreamReader(arg0: java.lang.String | string, arg1: java.io.Reader): javax.xml.stream.XMLStreamReader
                public abstract createXMLEventReader(arg0: java.io.Reader): javax.xml.stream.XMLEventReader
                public abstract createXMLEventReader(arg0: java.lang.String | string, arg1: java.io.Reader): javax.xml.stream.XMLEventReader
                public abstract createXMLEventReader(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.XMLEventReader
                public abstract createXMLEventReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLEventReader
                public abstract createXMLEventReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLEventReader
                public abstract createXMLEventReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLEventReader
                public abstract createXMLEventReader(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): javax.xml.stream.XMLEventReader
                public abstract createFilteredReader(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.StreamFilter | javax.xml.stream.StreamFilter$$Lambda): javax.xml.stream.XMLStreamReader
                public abstract createFilteredReader(arg0: javax.xml.stream.XMLEventReader, arg1: javax.xml.stream.EventFilter | javax.xml.stream.EventFilter$$Lambda): javax.xml.stream.XMLEventReader
                public abstract getXMLResolver(): javax.xml.stream.XMLResolver
                public abstract setXMLResolver(arg0: javax.xml.stream.XMLResolver | javax.xml.stream.XMLResolver$$Lambda): void
                public abstract getXMLReporter(): javax.xml.stream.XMLReporter
                public abstract setXMLReporter(arg0: javax.xml.stream.XMLReporter | javax.xml.stream.XMLReporter$$Lambda): void
                public abstract setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public abstract getProperty(arg0: java.lang.String | string): java.lang.Object
                public abstract isPropertySupported(arg0: java.lang.String | string): boolean
                public abstract setEventAllocator(arg0: javax.xml.stream.util.XMLEventAllocator): void
                public abstract getEventAllocator(): javax.xml.stream.util.XMLEventAllocator
                public static class: java.lang.Class<any>
            }
        }
    }
}