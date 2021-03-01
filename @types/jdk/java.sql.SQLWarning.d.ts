declare namespace java {
  namespace sql {

    class SQLWarning extends java.sql.SQLException {

      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String)
      public constructor()
      public constructor(arg0: java.lang.Throwable)
      public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Throwable)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: java.lang.Throwable)
      public getNextWarning(): java.sql.SQLWarning
      public setNextWarning(arg0: java.sql.SQLWarning): void
    }

  }
}
