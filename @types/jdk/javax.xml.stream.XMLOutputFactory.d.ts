declare namespace javax {
  namespace xml {
    namespace stream {

      abstract class XMLOutputFactory {

        public static readonly IS_REPAIRING_NAMESPACES: java.lang.String
        static readonly DEFAULIMPL: java.lang.String
        protected constructor()
        public static newDefaultFactory(): javax.xml.stream.XMLOutputFactory
        public static newInstance(): javax.xml.stream.XMLOutputFactory
        public static newFactory(): javax.xml.stream.XMLOutputFactory
        public static newInstance(arg0: java.lang.String, arg1: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
        public static newFactory(arg0: java.lang.String, arg1: java.lang.ClassLoader): javax.xml.stream.XMLOutputFactory
        public abstract createXMLStreamWriter(arg0: java.io.Writer): javax.xml.stream.XMLStreamWriter
        public abstract createXMLStreamWriter(arg0: java.io.OutputStream): javax.xml.stream.XMLStreamWriter
        public abstract createXMLStreamWriter(arg0: java.io.OutputStream, arg1: java.lang.String): javax.xml.stream.XMLStreamWriter
        public abstract createXMLStreamWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLStreamWriter
        public abstract createXMLEventWriter(arg0: javax.xml.transform.Result): javax.xml.stream.XMLEventWriter
        public abstract createXMLEventWriter(arg0: java.io.OutputStream): javax.xml.stream.XMLEventWriter
        public abstract createXMLEventWriter(arg0: java.io.OutputStream, arg1: java.lang.String): javax.xml.stream.XMLEventWriter
        public abstract createXMLEventWriter(arg0: java.io.Writer): javax.xml.stream.XMLEventWriter
        public abstract setProperty(arg0: java.lang.String, arg1: java.lang.Object): void
        public abstract getProperty(arg0: java.lang.String): java.lang.Object
        public abstract isPropertySupported(arg0: java.lang.String): boolean
      }

    }
  }
}
