declare namespace javax {
  namespace xml {
    namespace parsers {

      abstract class DocumentBuilder {
        protected constructor()
        public reset(): void
        public parse(arg0: java.io.InputStream): org.w3c.dom.Document
        public parse(arg0: java.io.InputStream, arg1: java.lang.String): org.w3c.dom.Document
        public parse(arg0: java.lang.String): org.w3c.dom.Document
        public parse(arg0: java.io.File): org.w3c.dom.Document
        public abstract parse(arg0: org.xml.sax.InputSource): org.w3c.dom.Document
        public abstract isNamespaceAware(): boolean
        public abstract isValidating(): boolean
        public abstract setEntityResolver(arg0: org.xml.sax.EntityResolver): void
        public abstract setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
        public abstract newDocument(): org.w3c.dom.Document
        public abstract getDOMImplementation(): org.w3c.dom.DOMImplementation
        public getSchema(): javax.xml.validation.Schema
        public isXIncludeAware(): boolean
      }

    }
  }
}
