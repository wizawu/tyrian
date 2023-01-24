declare namespace java {
  namespace rmi {
    namespace server {
      abstract class RMIClassLoaderSpi {
        public constructor()
        public abstract loadClass(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.ClassLoader
        ): java.lang.Class<unknown>
        public abstract loadProxyClass(
          arg0: java.lang.String | string,
          arg1: java.lang.String[] | string[],
          arg2: java.lang.ClassLoader
        ): java.lang.Class<unknown>
        public abstract getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
        public abstract getClassAnnotation(arg0: java.lang.Class<unknown>): java.lang.String
      }
    }
  }
}
