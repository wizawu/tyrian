declare namespace java {
  namespace rmi {
    namespace server {
      class ServerCloneException extends java.lang.CloneNotSupportedException {
        public detail: java.lang.Exception
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
        public getMessage(): java.lang.String
        public getCause(): java.lang.Throwable
      }
    }
  }
}
