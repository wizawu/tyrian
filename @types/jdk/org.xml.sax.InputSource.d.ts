declare namespace org {
  namespace xml {
    namespace sax {

      class InputSource {
        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.io.InputStream)
        public constructor(arg0: java.io.Reader)
        public setPublicId(arg0: java.lang.String): void
        public getPublicId(): java.lang.String
        public setSystemId(arg0: java.lang.String): void
        public getSystemId(): java.lang.String
        public setByteStream(arg0: java.io.InputStream): void
        public getByteStream(): java.io.InputStream
        public setEncoding(arg0: java.lang.String): void
        public getEncoding(): java.lang.String
        public setCharacterStream(arg0: java.io.Reader): void
        public getCharacterStream(): java.io.Reader
        public isEmpty(): boolean
      }

    }
  }
}
