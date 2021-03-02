declare namespace javax {
  namespace xml {
    namespace stream {

      abstract class XMLInputFactory {
        public static readonly IS_NAMESPACE_AWARE: java.lang.String
        public static readonly IS_VALIDATING: java.lang.String
        public static readonly IS_COALESCING: java.lang.String
        public static readonly IS_REPLACING_ENTITY_REFERENCES: java.lang.String
        public static readonly IS_SUPPORTING_EXTERNAL_ENTITIES: java.lang.String
        public static readonly SUPPORT_DTD: java.lang.String
        public static readonly REPORTER: java.lang.String
        public static readonly RESOLVER: java.lang.String
        public static readonly ALLOCATOR: java.lang.String
        static readonly DEFAULIMPL: java.lang.String
        protected constructor()
        public static newDefaultFactory(): javax.xml.stream.XMLInputFactory
        public static newInstance(): javax.xml.stream.XMLInputFactory
        public static newFactory(): javax.xml.stream.XMLInputFactory
        public static newInstance(arg0: java.lang.String, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
        public static newFactory(arg0: java.lang.String, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
        public abstract createXMLStreamReader(arg0: java.io.Reader): javax.xml.stream.XMLStreamReader
        public abstract createXMLStreamReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader
        public abstract createXMLStreamReader(arg0: java.io.InputStream): javax.xml.stream.XMLStreamReader
        public abstract createXMLStreamReader(arg0: java.io.InputStream, arg1: java.lang.String): javax.xml.stream.XMLStreamReader
        public abstract createXMLStreamReader(arg0: java.lang.String, arg1: java.io.InputStream): javax.xml.stream.XMLStreamReader
        public abstract createXMLStreamReader(arg0: java.lang.String, arg1: java.io.Reader): javax.xml.stream.XMLStreamReader
        public abstract createXMLEventReader(arg0: java.io.Reader): javax.xml.stream.XMLEventReader
        public abstract createXMLEventReader(arg0: java.lang.String, arg1: java.io.Reader): javax.xml.stream.XMLEventReader
        public abstract createXMLEventReader(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.XMLEventReader
        public abstract createXMLEventReader(arg0: javax.xml.transform.Source): javax.xml.stream.XMLEventReader
        public abstract createXMLEventReader(arg0: java.io.InputStream): javax.xml.stream.XMLEventReader
        public abstract createXMLEventReader(arg0: java.io.InputStream, arg1: java.lang.String): javax.xml.stream.XMLEventReader
        public abstract createXMLEventReader(arg0: java.lang.String, arg1: java.io.InputStream): javax.xml.stream.XMLEventReader
        public abstract createFilteredReader(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.StreamFilter): javax.xml.stream.XMLStreamReader
        public abstract createFilteredReader(arg0: javax.xml.stream.XMLEventReader, arg1: javax.xml.stream.EventFilter): javax.xml.stream.XMLEventReader
        public abstract getXMLResolver(): javax.xml.stream.XMLResolver
        public abstract setXMLResolver(arg0: javax.xml.stream.XMLResolver): void
        public abstract getXMLReporter(): javax.xml.stream.XMLReporter
        public abstract setXMLReporter(arg0: javax.xml.stream.XMLReporter): void
        public abstract setProperty(arg0: java.lang.String, arg1: java.lang.Object): void
        public abstract getProperty(arg0: java.lang.String): java.lang.Object
        public abstract isPropertySupported(arg0: java.lang.String): boolean
        public abstract setEventAllocator(arg0: javax.xml.stream.util.XMLEventAllocator): void
        public abstract getEventAllocator(): javax.xml.stream.util.XMLEventAllocator
      }

    }
  }
}
