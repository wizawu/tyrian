declare namespace javax {
  namespace xml {
    namespace stream {
      class FactoryConfigurationError extends java.lang.Error {
        nested: java.lang.Exception
        public constructor()
        public constructor(arg0: java.lang.Exception)
        public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
        public constructor(arg0: java.lang.String | string)
        public getException(): java.lang.Exception
        public getCause(): java.lang.Throwable
        public getMessage(): java.lang.String
      }
    }
  }
}
