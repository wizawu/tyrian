declare namespace javax {
  namespace management {
    namespace loading {
      class MLet
        extends java.net.URLClassLoader
        implements javax.management.loading.MLetMBean, javax.management.MBeanRegistration, java.io.Externalizable
      {
        public constructor()
        public constructor(arg0: java.net.URL[])
        public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader)
        public constructor(
          arg0: java.net.URL[],
          arg1: java.lang.ClassLoader,
          arg2: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$lambda
        )
        public constructor(arg0: java.net.URL[], arg1: boolean | java.lang.Boolean)
        public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader, arg2: boolean | java.lang.Boolean)
        public constructor(
          arg0: java.net.URL[],
          arg1: java.lang.ClassLoader,
          arg2: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$lambda,
          arg3: boolean | java.lang.Boolean
        )
        public addURL(arg0: java.net.URL): void
        public addURL(arg0: java.lang.String | string): void
        public getURLs(): java.net.URL[]
        public getMBeansFromURL(arg0: java.net.URL): java.util.Set<java.lang.Object>
        public getMBeansFromURL(arg0: java.lang.String | string): java.util.Set<java.lang.Object>
        public getLibraryDirectory(): java.lang.String
        public setLibraryDirectory(arg0: java.lang.String | string): void
        public preRegister(
          arg0: javax.management.MBeanServer,
          arg1: javax.management.ObjectName
        ): javax.management.ObjectName
        public postRegister(arg0: boolean | java.lang.Boolean): void
        public preDeregister(): void
        public postDeregister(): void
        public writeExternal(arg0: java.io.ObjectOutput): void
        public readExternal(arg0: java.io.ObjectInput): void
        public loadClass(
          arg0: java.lang.String | string,
          arg1: javax.management.loading.ClassLoaderRepository
        ): java.lang.Class<unknown>
        protected findClass(arg0: java.lang.String | string): java.lang.Class<unknown>
        findClass(
          arg0: java.lang.String | string,
          arg1: javax.management.loading.ClassLoaderRepository
        ): java.lang.Class<unknown>
        protected findLibrary(arg0: java.lang.String | string): java.lang.String
        protected check(
          arg0: java.lang.String | string,
          arg1: java.net.URL,
          arg2: java.lang.String | string,
          arg3: javax.management.loading.MLetContent
        ): java.net.URL
      }
    }
  }
}
