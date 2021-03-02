declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {

        interface LSOutput {
          getCharacterStream(): java.io.Writer
          setCharacterStream(arg0: java.io.Writer): void
          getByteStream(): java.io.OutputStream
          setByteStream(arg0: java.io.OutputStream): void
          getSystemId(): java.lang.String
          setSystemId(arg0: java.lang.String): void
          getEncoding(): java.lang.String
          setEncoding(arg0: java.lang.String): void
        }

      }
    }
  }
}
