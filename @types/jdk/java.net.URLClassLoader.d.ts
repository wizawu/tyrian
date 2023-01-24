declare namespace java {
  namespace net {
    class URLClassLoader extends java.security.SecureClassLoader implements java.io.Closeable {
      public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader)
      constructor(
        arg0: java.lang.String | string,
        arg1: java.net.URL[],
        arg2: java.lang.ClassLoader,
        arg3: java.security.AccessControlContext
      )
      public constructor(arg0: java.net.URL[])
      constructor(arg0: java.net.URL[], arg1: java.security.AccessControlContext)
      public constructor(
        arg0: java.net.URL[],
        arg1: java.lang.ClassLoader,
        arg2: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$lambda
      )
      public constructor(arg0: java.lang.String | string, arg1: java.net.URL[], arg2: java.lang.ClassLoader)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.net.URL[],
        arg2: java.lang.ClassLoader,
        arg3: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$lambda
      )
      public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
      public close(): void
      protected addURL(arg0: java.net.URL): void
      public getURLs(): java.net.URL[]
      protected findClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      protected definePackage(
        arg0: java.lang.String | string,
        arg1: java.util.jar.Manifest,
        arg2: java.net.URL
      ): java.lang.Package
      public findResource(arg0: java.lang.String | string): java.net.URL
      public findResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
      protected getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
      public static newInstance(arg0: java.net.URL[], arg1: java.lang.ClassLoader): java.net.URLClassLoader
      public static newInstance(arg0: java.net.URL[]): java.net.URLClassLoader
    }
  }
}
