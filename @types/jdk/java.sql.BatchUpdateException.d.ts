declare namespace java {
  namespace sql {

    class BatchUpdateException extends java.sql.SQLException {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: int[])
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int[])
      public constructor(arg0: java.lang.String | string, arg1: int[])
      public constructor(arg0: int[])
      public constructor()
      public constructor(arg0: java.lang.Throwable)
      public constructor(arg0: int[], arg1: java.lang.Throwable)
      public constructor(arg0: java.lang.String | string, arg1: int[], arg2: java.lang.Throwable)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int[], arg3: java.lang.Throwable)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: int[], arg4: java.lang.Throwable)
      public getUpdateCounts(): number[]
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: long[], arg4: java.lang.Throwable)
      public getLargeUpdateCounts(): number[]
    }

  }
}
