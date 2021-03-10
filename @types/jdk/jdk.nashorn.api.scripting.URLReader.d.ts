declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        class URLReader extends java.io.Reader {
          public constructor(arg0: java.net.URL)
          public constructor(arg0: java.net.URL, arg1: java.lang.String | string)
          public constructor(arg0: java.net.URL, arg1: java.nio.charset.Charset)
          public read(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public close(): void
          public getURL(): java.net.URL
          public getCharset(): java.nio.charset.Charset
        }

      }
    }
  }
}
