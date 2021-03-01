declare namespace org {
  namespace xml {
    namespace sax {

      class SAXParseException extends org.xml.sax.SAXException {

        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: org.xml.sax.Locator)
        public constructor(arg0: java.lang.String, arg1: org.xml.sax.Locator, arg2: java.lang.Exception)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: int, arg4: int)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: int, arg4: int, arg5: java.lang.Exception)
        public getPublicId(): java.lang.String
        public getSystemId(): java.lang.String
        public getLineNumber(): int
        public getColumnNumber(): int
        public toString(): java.lang.String
      }

    }
  }
}
