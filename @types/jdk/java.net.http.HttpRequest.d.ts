declare namespace java {
  namespace net {
    namespace http {
      abstract class HttpRequest {
        protected constructor()
        public static newBuilder(arg0: java.net.URI): java.net.http.HttpRequest$Builder
        public static newBuilder(): java.net.http.HttpRequest$Builder
        public abstract bodyPublisher(): java.util.Optional<java.net.http.HttpRequest$BodyPublisher>
        public abstract method(): java.lang.String
        public abstract timeout(): java.util.Optional<java.time.Duration>
        public abstract expectContinue(): boolean
        public abstract uri(): java.net.URI
        public abstract version(): java.util.Optional<java.net.http.HttpClient$Version>
        public abstract headers(): java.net.http.HttpHeaders
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }
    }
  }
}
