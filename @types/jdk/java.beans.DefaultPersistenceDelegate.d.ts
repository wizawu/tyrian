declare namespace java {
  namespace beans {

    class DefaultPersistenceDelegate extends java.beans.PersistenceDelegate {
      public constructor()
      public constructor(arg0: java.lang.String[] | string[])
      protected mutatesTo(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      protected instantiate(arg0: java.lang.Object | any, arg1: java.beans.Encoder): java.beans.Expression
      static invokeStatement(arg0: java.lang.Object | any, arg1: java.lang.String | string, arg2: java.lang.Object[] | any[], arg3: java.beans.Encoder): void
      protected initialize(arg0: java.lang.Class<unknown>, arg1: java.lang.Object | any, arg2: java.lang.Object | any, arg3: java.beans.Encoder): void
    }

  }
}
