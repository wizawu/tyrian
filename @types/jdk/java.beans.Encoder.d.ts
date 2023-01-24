declare namespace java {
  namespace beans {
    class Encoder {
      executeStatements: boolean
      public constructor()
      protected writeObject(arg0: java.lang.Object | any): void
      public setExceptionListener(arg0: java.beans.ExceptionListener | java.beans.ExceptionListener$$lambda): void
      public getExceptionListener(): java.beans.ExceptionListener
      getValue(arg0: java.beans.Expression): java.lang.Object
      public getPersistenceDelegate(arg0: java.lang.Class<unknown>): java.beans.PersistenceDelegate
      public setPersistenceDelegate(arg0: java.lang.Class<unknown>, arg1: java.beans.PersistenceDelegate): void
      public remove(arg0: java.lang.Object | any): java.lang.Object
      public get(arg0: java.lang.Object | any): java.lang.Object
      public writeStatement(arg0: java.beans.Statement): void
      public writeExpression(arg0: java.beans.Expression): void
      clear(): void
      setAttribute(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
      getAttribute(arg0: java.lang.Object | any): java.lang.Object
    }
  }
}
