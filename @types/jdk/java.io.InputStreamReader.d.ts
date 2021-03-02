declare namespace java {
  namespace io {

    class InputStreamReader extends java.io.Reader {
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string)
      public constructor(arg0: java.io.InputStream, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.io.InputStream, arg1: java.nio.charset.CharsetDecoder)
      public getEncoding(): java.lang.String
      public read(): number
      public read(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public ready(): boolean
      public close(): void
    }

  }
}
