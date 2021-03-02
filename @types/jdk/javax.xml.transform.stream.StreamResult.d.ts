declare namespace javax {
  namespace xml {
    namespace transform {
      namespace stream {

        class StreamResult implements javax.xml.transform.Result {
          public static readonly FEATURE: java.lang.String
          public constructor()
          public constructor(arg0: java.io.OutputStream)
          public constructor(arg0: java.io.Writer)
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.io.File)
          public setOutputStream(arg0: java.io.OutputStream): void
          public getOutputStream(): java.io.OutputStream
          public setWriter(arg0: java.io.Writer): void
          public getWriter(): java.io.Writer
          public setSystemId(arg0: java.lang.String | string): void
          public setSystemId(arg0: java.io.File): void
          public getSystemId(): java.lang.String
        }

      }
    }
  }
}
