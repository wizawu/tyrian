declare namespace java {
  namespace util {
    namespace logging {
      abstract class Formatter {
        protected constructor()
        public abstract format(arg0: java.util.logging.LogRecord): java.lang.String
        public getHead(arg0: java.util.logging.Handler): java.lang.String
        public getTail(arg0: java.util.logging.Handler): java.lang.String
        public formatMessage(arg0: java.util.logging.LogRecord): java.lang.String
      }
    }
  }
}
