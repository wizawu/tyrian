declare namespace java {
  namespace beans {
    class XMLDecoder implements java.lang.AutoCloseable {
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.InputStream, arg1: java.lang.Object | any)
      public constructor(
        arg0: java.io.InputStream,
        arg1: java.lang.Object | any,
        arg2: java.beans.ExceptionListener | java.beans.ExceptionListener$$lambda
      )
      public constructor(
        arg0: java.io.InputStream,
        arg1: java.lang.Object | any,
        arg2: java.beans.ExceptionListener | java.beans.ExceptionListener$$lambda,
        arg3: java.lang.ClassLoader
      )
      public constructor(arg0: org.xml.sax.InputSource)
      public close(): void
      public setExceptionListener(arg0: java.beans.ExceptionListener | java.beans.ExceptionListener$$lambda): void
      public getExceptionListener(): java.beans.ExceptionListener
      public readObject(): java.lang.Object
      public setOwner(arg0: java.lang.Object | any): void
      public getOwner(): java.lang.Object
      public static createHandler(
        arg0: java.lang.Object | any,
        arg1: java.beans.ExceptionListener | java.beans.ExceptionListener$$lambda,
        arg2: java.lang.ClassLoader
      ): org.xml.sax.helpers.DefaultHandler
    }
  }
}
