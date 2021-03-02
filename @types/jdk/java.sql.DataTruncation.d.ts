declare namespace java {
  namespace sql {

    class DataTruncation extends java.sql.SQLWarning {
      public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.lang.Throwable)
      public getIndex(): number
      public getParameter(): boolean
      public getRead(): boolean
      public getDataSize(): number
      public getTransferSize(): number
    }

  }
}
