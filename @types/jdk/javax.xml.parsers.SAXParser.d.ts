declare namespace javax {
  namespace xml {
    namespace parsers {
      abstract class SAXParser {
        protected constructor()
        public reset(): void
        public parse(arg0: java.io.InputStream, arg1: org.xml.sax.HandlerBase): void
        public parse(arg0: java.io.InputStream, arg1: org.xml.sax.HandlerBase, arg2: java.lang.String | string): void
        public parse(arg0: java.io.InputStream, arg1: org.xml.sax.helpers.DefaultHandler): void
        public parse(
          arg0: java.io.InputStream,
          arg1: org.xml.sax.helpers.DefaultHandler,
          arg2: java.lang.String | string
        ): void
        public parse(arg0: java.lang.String | string, arg1: org.xml.sax.HandlerBase): void
        public parse(arg0: java.lang.String | string, arg1: org.xml.sax.helpers.DefaultHandler): void
        public parse(arg0: java.io.File, arg1: org.xml.sax.HandlerBase): void
        public parse(arg0: java.io.File, arg1: org.xml.sax.helpers.DefaultHandler): void
        public parse(arg0: org.xml.sax.InputSource, arg1: org.xml.sax.HandlerBase): void
        public parse(arg0: org.xml.sax.InputSource, arg1: org.xml.sax.helpers.DefaultHandler): void
        public abstract getParser(): org.xml.sax.Parser
        public abstract getXMLReader(): org.xml.sax.XMLReader
        public abstract isNamespaceAware(): boolean
        public abstract isValidating(): boolean
        public abstract setProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
        public abstract getProperty(arg0: java.lang.String | string): java.lang.Object
        public getSchema(): javax.xml.validation.Schema
        public isXIncludeAware(): boolean
      }
    }
  }
}
