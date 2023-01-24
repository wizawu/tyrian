declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {
        interface LSInput {
          getCharacterStream(): java.io.Reader
          setCharacterStream(arg0: java.io.Reader): void
          getByteStream(): java.io.InputStream
          setByteStream(arg0: java.io.InputStream): void
          getStringData(): java.lang.String
          setStringData(arg0: java.lang.String | string): void
          getSystemId(): java.lang.String
          setSystemId(arg0: java.lang.String | string): void
          getPublicId(): java.lang.String
          setPublicId(arg0: java.lang.String | string): void
          getBaseURI(): java.lang.String
          setBaseURI(arg0: java.lang.String | string): void
          getEncoding(): java.lang.String
          setEncoding(arg0: java.lang.String | string): void
          getCertifiedText(): boolean
          setCertifiedText(arg0: boolean | java.lang.Boolean): void
        }
      }
    }
  }
}
