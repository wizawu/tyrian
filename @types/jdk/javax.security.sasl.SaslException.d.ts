declare namespace javax {
  namespace security {
    namespace sasl {

      class SaslException extends java.io.IOException {
        public constructor()
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
        public getCause(): java.lang.Throwable
        public initCause(arg0: java.lang.Throwable): java.lang.Throwable
        public toString(): java.lang.String
      }

    }
  }
}
