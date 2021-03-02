declare namespace javax {
  namespace xml {
    namespace validation {

      abstract class Validator {
        protected constructor()
        public abstract reset(): void
        public validate(arg0: javax.xml.transform.Source): void
        public abstract validate(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
        public abstract setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
        public abstract getErrorHandler(): org.xml.sax.ErrorHandler
        public abstract setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver): void
        public abstract getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
        public getFeature(arg0: java.lang.String): boolean
        public setFeature(arg0: java.lang.String, arg1: boolean): void
        public setProperty(arg0: java.lang.String, arg1: java.lang.Object): void
        public getProperty(arg0: java.lang.String): java.lang.Object
      }

    }
  }
}
