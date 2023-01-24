declare namespace java {
  namespace beans {
    abstract class PersistenceDelegate {
      public constructor()
      public writeObject(arg0: java.lang.Object | any, arg1: java.beans.Encoder): void
      protected mutatesTo(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      protected abstract instantiate(arg0: java.lang.Object | any, arg1: java.beans.Encoder): java.beans.Expression
      protected initialize(
        arg0: java.lang.Class<unknown>,
        arg1: java.lang.Object | any,
        arg2: java.lang.Object | any,
        arg3: java.beans.Encoder
      ): void
    }
  }
}
