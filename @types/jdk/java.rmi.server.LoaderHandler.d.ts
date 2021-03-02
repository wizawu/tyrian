declare namespace java {
  namespace rmi {
    namespace server {

      interface LoaderHandler {
        public static readonly packagePrefix: java.lang.String
        loadClass(arg0: java.lang.String | string): java.lang.Class<unknown>
        loadClass(arg0: java.net.URL, arg1: java.lang.String | string): java.lang.Class<unknown>
        getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
      }

    }
  }
}
