declare namespace javax {
  namespace xml {
    namespace stream {

      class XMLStreamException extends java.lang.Exception {
        protected nested: java.lang.Throwable
        protected location: javax.xml.stream.Location
        public constructor()
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.Throwable)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
        public constructor(arg0: java.lang.String | string, arg1: javax.xml.stream.Location, arg2: java.lang.Throwable)
        public constructor(arg0: java.lang.String | string, arg1: javax.xml.stream.Location)
        public getNestedException(): java.lang.Throwable
        public getLocation(): javax.xml.stream.Location
      }

    }
  }
}
