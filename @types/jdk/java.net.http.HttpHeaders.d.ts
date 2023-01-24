declare namespace java {
  namespace net {
    namespace http {
      class HttpHeaders {
        public firstValue(arg0: java.lang.String | string): java.util.Optional<java.lang.String>
        public firstValueAsLong(arg0: java.lang.String | string): java.util.OptionalLong
        public allValues(arg0: java.lang.String | string): java.util.List<java.lang.String>
        public map(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        public static of(
          arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>,
          arg1: java.util.function$.BiPredicate<java.lang.String, java.lang.String>
        ): java.net.http.HttpHeaders
      }
    }
  }
}
