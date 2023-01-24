declare namespace java {
  namespace util {
    abstract class ListResourceBundle extends java.util.ResourceBundle {
      public constructor()
      public handleGetObject(arg0: java.lang.String | string): java.lang.Object
      public getKeys(): java.util.Enumeration<java.lang.String>
      protected handleKeySet(): java.util.Set<java.lang.String>
      protected abstract getContents(): java.lang.Object[][]
    }
  }
}
