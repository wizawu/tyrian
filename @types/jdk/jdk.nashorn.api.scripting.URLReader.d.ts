declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        class URLReader extends java.io.Reader {

          public constructor(arg0: java.net.URL)
          public constructor(arg0: java.net.URL, arg1: java.lang.String)
          public constructor(arg0: java.net.URL, arg1: java.nio.charset.Charset)
          public read(arg0: char[], arg1: int, arg2: int): int
          public close(): void
          public getURL(): java.net.URL
          public getCharset(): java.nio.charset.Charset
        }

      }
    }
  }
}
