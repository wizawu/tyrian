declare namespace java {
  namespace util {
    namespace spi {

      abstract class AbstractResourceBundleProvider implements java.util.spi.ResourceBundleProvider {
        protected constructor()
        protected constructor(...arg0: java.lang.String[])
        protected toBundleName(arg0: java.lang.String, arg1: java.util.Locale): java.lang.String
        public getBundle(arg0: java.lang.String, arg1: java.util.Locale): java.util.ResourceBundle
      }

    }
  }
}
