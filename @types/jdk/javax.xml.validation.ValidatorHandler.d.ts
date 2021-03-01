declare namespace javax {
  namespace xml {
    namespace validation {

      abstract class ValidatorHandler implements org.xml.sax.ContentHandler {

        protected constructor()
        public abstract setContentHandler(arg0: org.xml.sax.ContentHandler): void
        public abstract getContentHandler(): org.xml.sax.ContentHandler
        public abstract setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
        public abstract getErrorHandler(): org.xml.sax.ErrorHandler
        public abstract setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver): void
        public abstract getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
        public abstract getTypeInfoProvider(): javax.xml.validation.TypeInfoProvider
        public getFeature(arg0: java.lang.String): boolean
        public setFeature(arg0: java.lang.String, arg1: boolean): void
        public setProperty(arg0: java.lang.String, arg1: java.lang.Object): void
        public getProperty(arg0: java.lang.String): java.lang.Object
      }

    }
  }
}
