declare namespace java {
  namespace rmi {
    namespace activation {

      class ActivationException extends java.lang.Exception {
        public detail: java.lang.Throwable
        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
        public getMessage(): java.lang.String
        public getCause(): java.lang.Throwable
      }

    }
  }
}
