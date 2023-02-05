declare namespace javax {
  namespace xml {
    namespace parsers {
      abstract class SAXParserFactory {
        protected constructor()
        public static newDefaultInstance(): javax.xml.parsers.SAXParserFactory
        public static newInstance(): javax.xml.parsers.SAXParserFactory
        public static newInstance(
          arg0: java.lang.String | string,
          arg1: java.lang.ClassLoader
        ): javax.xml.parsers.SAXParserFactory
        public abstract newSAXParser(): javax.xml.parsers.SAXParser
        public setNamespaceAware(arg0: boolean | java.lang.Boolean): void
        public setValidating(arg0: boolean | java.lang.Boolean): void
        public isNamespaceAware(): boolean
        public isValidating(): boolean
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
