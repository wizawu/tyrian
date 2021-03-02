declare namespace javax {
  namespace xml {
    namespace parsers {

      abstract class DocumentBuilderFactory {
        protected constructor()
        public static newDefaultInstance(): javax.xml.parsers.DocumentBuilderFactory
        public static newInstance(): javax.xml.parsers.DocumentBuilderFactory
        public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.parsers.DocumentBuilderFactory
        public abstract newDocumentBuilder(): javax.xml.parsers.DocumentBuilder
        public setNamespaceAware(arg0: boolean | java.lang.Boolean): void
        public setValidating(arg0: boolean | java.lang.Boolean): void
        public setIgnoringElementContentWhitespace(arg0: boolean | java.lang.Boolean): void
        public setExpandEntityReferences(arg0: boolean | java.lang.Boolean): void
        public setIgnoringComments(arg0: boolean | java.lang.Boolean): void
        public setCoalescing(arg0: boolean | java.lang.Boolean): void
        public isNamespaceAware(): boolean
        public isValidating(): boolean
        public isIgnoringElementContentWhitespace(): boolean
        public isExpandEntityReferences(): boolean
        public isIgnoringComments(): boolean
        public isCoalescing(): boolean
        public abstract setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
        public abstract getAttribute(arg0: java.lang.String | string): java.lang.Object
        public abstract setFeature(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
        public abstract getFeature(arg0: java.lang.String | string): boolean
        public getSchema(): javax.xml.validation.Schema
        public setSchema(arg0: javax.xml.validation.Schema): void
        public setXIncludeAware(arg0: boolean | java.lang.Boolean): void
        public isXIncludeAware(): boolean
      }

    }
  }
}
