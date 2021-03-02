declare namespace java {
  namespace sql {

    class DataTruncation extends java.sql.SQLWarning {
      public constructor(arg0: int, arg1: boolean, arg2: boolean, arg3: int, arg4: int)
      public constructor(arg0: int, arg1: boolean, arg2: boolean, arg3: int, arg4: int, arg5: java.lang.Throwable)
      public getIndex(): int
      public getParameter(): boolean
      public getRead(): boolean
      public getDataSize(): int
      public getTransferSize(): int
    }

  }
}
