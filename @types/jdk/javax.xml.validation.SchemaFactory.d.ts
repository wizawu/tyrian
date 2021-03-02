declare namespace javax {
  namespace xml {
    namespace validation {

      abstract class SchemaFactory {
        protected constructor()
        public static newDefaultInstance(): javax.xml.validation.SchemaFactory
        public static newInstance(arg0: java.lang.String): javax.xml.validation.SchemaFactory
        public static newInstance(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.ClassLoader): javax.xml.validation.SchemaFactory
        public abstract isSchemaLanguageSupported(arg0: java.lang.String): boolean
        public getFeature(arg0: java.lang.String): boolean
        public setFeature(arg0: java.lang.String, arg1: boolean): void
        public setProperty(arg0: java.lang.String, arg1: java.lang.Object): void
        public getProperty(arg0: java.lang.String): java.lang.Object
        public abstract setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
        public abstract getErrorHandler(): org.xml.sax.ErrorHandler
        public abstract setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver): void
        public abstract getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
        public newSchema(arg0: javax.xml.transform.Source): javax.xml.validation.Schema
        public newSchema(arg0: java.io.File): javax.xml.validation.Schema
        public newSchema(arg0: java.net.URL): javax.xml.validation.Schema
        public abstract newSchema(arg0: javax.xml.transform.Source[]): javax.xml.validation.Schema
        public abstract newSchema(): javax.xml.validation.Schema
      }

    }
  }
}
