declare namespace java {
  namespace util {

    class PropertyResourceBundle extends java.util.ResourceBundle {
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.Reader)
      public handleGetObject(arg0: java.lang.String): java.lang.Object
      public getKeys(): java.util.Enumeration<java.lang.String>
      protected handleKeySet(): java.util.Set<java.lang.String>
    }

  }
}
