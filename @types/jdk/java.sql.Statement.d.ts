declare namespace java {
  namespace sql {

    interface Statement extends java.sql.Wrapper, java.lang.AutoCloseable {
      public static readonly CLOSE_CURRENT_RESULT: int
      public static readonly KEEP_CURRENT_RESULT: int
      public static readonly CLOSE_ALL_RESULTS: int
      public static readonly SUCCESS_NO_INFO: int
      public static readonly EXECUTE_FAILED: int
      public static readonly RETURN_GENERATED_KEYS: int
      public static readonly NO_GENERATED_KEYS: int
      executeQuery(arg0: java.lang.String): java.sql.ResultSet
      executeUpdate(arg0: java.lang.String): int
      close(): void
      getMaxFieldSize(): int
      setMaxFieldSize(arg0: int): void
      getMaxRows(): int
      setMaxRows(arg0: int): void
      setEscapeProcessing(arg0: boolean): void
      getQueryTimeout(): int
      setQueryTimeout(arg0: int): void
      cancel(): void
      getWarnings(): java.sql.SQLWarning
      clearWarnings(): void
      setCursorName(arg0: java.lang.String): void
      execute(arg0: java.lang.String): boolean
      getResultSet(): java.sql.ResultSet
      getUpdateCount(): int
      getMoreResults(): boolean
      setFetchDirection(arg0: int): void
      getFetchDirection(): int
      setFetchSize(arg0: int): void
      getFetchSize(): int
      getResultSetConcurrency(): int
      getResultSetType(): int
      addBatch(arg0: java.lang.String): void
      clearBatch(): void
      executeBatch(): int[]
      getConnection(): java.sql.Connection
      getMoreResults(arg0: int): boolean
      getGeneratedKeys(): java.sql.ResultSet
      executeUpdate(arg0: java.lang.String, arg1: int): int
      executeUpdate(arg0: java.lang.String, arg1: int[]): int
      executeUpdate(arg0: java.lang.String, arg1: java.lang.String[]): int
      execute(arg0: java.lang.String, arg1: int): boolean
      execute(arg0: java.lang.String, arg1: int[]): boolean
      execute(arg0: java.lang.String, arg1: java.lang.String[]): boolean
      getResultSetHoldability(): int
      isClosed(): boolean
      setPoolable(arg0: boolean): void
      isPoolable(): boolean
      closeOnCompletion(): void
      isCloseOnCompletion(): boolean
      getLargeUpdateCount(): long
      setLargeMaxRows(arg0: long): void
      getLargeMaxRows(): long
      executeLargeBatch(): long[]
      executeLargeUpdate(arg0: java.lang.String): long
      executeLargeUpdate(arg0: java.lang.String, arg1: int): long
      executeLargeUpdate(arg0: java.lang.String, arg1: int[]): long
      executeLargeUpdate(arg0: java.lang.String, arg1: java.lang.String[]): long
      enquoteLiteral(arg0: java.lang.String): java.lang.String
      enquoteIdentifier(arg0: java.lang.String, arg1: boolean): java.lang.String
      isSimpleIdentifier(arg0: java.lang.String): boolean
      enquoteNCharLiteral(arg0: java.lang.String): java.lang.String
    }

  }
}
