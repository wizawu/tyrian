declare namespace org {
  namespace xml {
    namespace sax {

      class SAXException extends java.lang.Exception {
        static readonly serialVersionUID: long
        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.Exception)
        public constructor(arg0: java.lang.String, arg1: java.lang.Exception)
        public getMessage(): java.lang.String
        public getException(): java.lang.Exception
        public getCause(): java.lang.Throwable
        public toString(): java.lang.String
      }

    }
  }
}
