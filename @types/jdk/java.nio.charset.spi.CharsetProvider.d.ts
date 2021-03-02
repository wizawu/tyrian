declare namespace java {
  namespace nio {
    namespace charset {
      namespace spi {

        abstract class CharsetProvider {
          protected constructor()
          public abstract charsets(): java.util.Iterator<java.nio.charset.Charset>
          public abstract charsetForName(arg0: java.lang.String | string): java.nio.charset.Charset
        }

      }
    }
  }
}
