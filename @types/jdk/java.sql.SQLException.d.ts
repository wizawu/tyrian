declare namespace java {
  namespace sql {

    class SQLException extends java.lang.Exception implements java.lang.Iterable<java.lang.Throwable> {

      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String)
      public constructor()
      public constructor(arg0: java.lang.Throwable)
      public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Throwable)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: java.lang.Throwable)
      public getSQLState(): java.lang.String
      public getErrorCode(): int
      public getNextException(): java.sql.SQLException
      public setNextException(arg0: java.sql.SQLException): void
      public iterator(): java.util.Iterator<java.lang.Throwable>
    }

  }
}
