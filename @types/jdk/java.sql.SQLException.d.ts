declare namespace java {
  namespace sql {
    class SQLException extends java.lang.Exception implements java.lang.Iterable<java.lang.Throwable> {
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer
      )
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.String | string)
      public constructor()
      public constructor(arg0: java.lang.Throwable)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer,
        arg3: java.lang.Throwable
      )
      public getSQLState(): java.lang.String
      public getErrorCode(): number
      public getNextException(): java.sql.SQLException
      public setNextException(arg0: java.sql.SQLException): void
      public iterator(): java.util.Iterator<java.lang.Throwable>
    }
  }
}
