declare namespace java {
  namespace util {
    namespace logging {
      class XMLFormatter extends java.util.logging.Formatter {
        public constructor()
        public format(arg0: java.util.logging.LogRecord): java.lang.String
        public getHead(arg0: java.util.logging.Handler): java.lang.String
        public getTail(arg0: java.util.logging.Handler): java.lang.String
      }
    }
  }
}
