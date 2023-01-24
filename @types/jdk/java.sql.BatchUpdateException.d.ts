declare namespace java {
  namespace sql {
    class BatchUpdateException extends java.sql.SQLException {
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Integer[]
      )
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number[] | java.lang.Integer[]
      )
      public constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Integer[])
      public constructor(arg0: number[] | java.lang.Integer[])
      public constructor()
      public constructor(arg0: java.lang.Throwable)
      public constructor(arg0: number[] | java.lang.Integer[], arg1: java.lang.Throwable)
      public constructor(
        arg0: java.lang.String | string,
        arg1: number[] | java.lang.Integer[],
        arg2: java.lang.Throwable
      )
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number[] | java.lang.Integer[],
        arg3: java.lang.Throwable
      )
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Integer[],
        arg4: java.lang.Throwable
      )
      public getUpdateCounts(): number[]
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Long[],
        arg4: java.lang.Throwable
      )
      public getLargeUpdateCounts(): number[]
    }
  }
}
