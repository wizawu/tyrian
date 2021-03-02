declare namespace java {
  namespace beans {

    class DefaultPersistenceDelegate extends java.beans.PersistenceDelegate {
      public constructor()
      public constructor(arg0: java.lang.String[])
      protected mutatesTo(arg0: java.lang.Object, arg1: java.lang.Object): boolean
      protected instantiate(arg0: java.lang.Object, arg1: java.beans.Encoder): java.beans.Expression
      static invokeStatement(arg0: java.lang.Object, arg1: java.lang.String, arg2: java.lang.Object[], arg3: java.beans.Encoder): void
      protected initialize(arg0: java.lang.Class<unknown>, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.beans.Encoder): void
    }

  }
}
