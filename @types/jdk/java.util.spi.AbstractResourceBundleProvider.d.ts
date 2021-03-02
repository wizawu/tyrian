declare namespace java {
  namespace util {
    namespace spi {

      abstract class AbstractResourceBundleProvider implements java.util.spi.ResourceBundleProvider {
        protected constructor()
        protected constructor(...vargs: (java.lang.String | string)[])
        protected toBundleName(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public getBundle(arg0: java.lang.String | string, arg1: java.util.Locale): java.util.ResourceBundle
      }

    }
  }
}
