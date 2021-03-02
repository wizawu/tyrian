declare namespace javax {
  namespace xml {
    namespace stream {

      class FactoryConfigurationError extends java.lang.Error {
        nested: java.lang.Exception
        public constructor()
        public constructor(arg0: java.lang.Exception)
        public constructor(arg0: java.lang.Exception, arg1: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.Exception)
        public constructor(arg0: java.lang.String)
        public getException(): java.lang.Exception
        public getCause(): java.lang.Throwable
        public getMessage(): java.lang.String
      }

    }
  }
}
