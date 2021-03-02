declare namespace org {
  namespace xml {
    namespace sax {

      class SAXParseException extends org.xml.sax.SAXException {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String | string, arg1: org.xml.sax.Locator)
        public constructor(arg0: java.lang.String | string, arg1: org.xml.sax.Locator, arg2: java.lang.Exception)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.lang.Exception)
        public getPublicId(): java.lang.String
        public getSystemId(): java.lang.String
        public getLineNumber(): number
        public getColumnNumber(): number
        public toString(): java.lang.String
      }

    }
  }
}
