declare namespace java {
  namespace sql {
    class SQLWarning extends java.sql.SQLException {
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
      public getNextWarning(): java.sql.SQLWarning
      public setNextWarning(arg0: java.sql.SQLWarning): void
    }
  }
}
