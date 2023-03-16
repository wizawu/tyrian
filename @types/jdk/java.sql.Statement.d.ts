declare namespace java {
  namespace sql {
    interface Statement extends java.sql.Wrapper, java.lang.AutoCloseable {
      readonly CLOSE_CURRENT_RESULT: int
      readonly KEEP_CURRENT_RESULT: int
      readonly CLOSE_ALL_RESULTS: int
      readonly SUCCESS_NO_INFO: int
      readonly EXECUTE_FAILED: int
      readonly RETURN_GENERATED_KEYS: int
      readonly NO_GENERATED_KEYS: int
      executeQuery(arg0: java.lang.String | string): java.sql.ResultSet
      executeUpdate(arg0: java.lang.String | string): number
      close(): void
      getMaxFieldSize(): number
      setMaxFieldSize(arg0: number | java.lang.Integer): void
      getMaxRows(): number
      setMaxRows(arg0: number | java.lang.Integer): void
      setEscapeProcessing(arg0: boolean | java.lang.Boolean): void
      getQueryTimeout(): number
      setQueryTimeout(arg0: number | java.lang.Integer): void
      cancel(): void
      getWarnings(): java.sql.SQLWarning
      clearWarnings(): void
      setCursorName(arg0: java.lang.String | string): void
      execute(arg0: java.lang.String | string): boolean
      getResultSet(): java.sql.ResultSet
      getUpdateCount(): number
      getMoreResults(): boolean
      setFetchDirection(arg0: number | java.lang.Integer): void
      getFetchDirection(): number
      setFetchSize(arg0: number | java.lang.Integer): void
      getFetchSize(): number
      getResultSetConcurrency(): number
      getResultSetType(): number
      addBatch(arg0: java.lang.String | string): void
      clearBatch(): void
      executeBatch(): number[]
      getConnection(): java.sql.Connection
      getMoreResults(arg0: number | java.lang.Integer): boolean
      getGeneratedKeys(): java.sql.ResultSet
      executeUpdate(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      executeUpdate(arg0: java.lang.String | string, arg1: number[] | java.lang.Integer[]): number
      executeUpdate(arg0: java.lang.String | string, arg1: java.lang.String[] | string[]): number
      execute(arg0: java.lang.String | string, arg1: number | java.lang.Integer): boolean
      execute(arg0: java.lang.String | string, arg1: number[] | java.lang.Integer[]): boolean
      execute(arg0: java.lang.String | string, arg1: java.lang.String[] | string[]): boolean
      getResultSetHoldability(): number
      isClosed(): boolean
      setPoolable(arg0: boolean | java.lang.Boolean): void
      isPoolable(): boolean
      closeOnCompletion(): void
      isCloseOnCompletion(): boolean
      getLargeUpdateCount?(): number
      setLargeMaxRows?(arg0: number | java.lang.Long): void
      getLargeMaxRows?(): number
      executeLargeBatch?(): number[]
      executeLargeUpdate?(arg0: java.lang.String | string): number
      executeLargeUpdate?(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      executeLargeUpdate?(arg0: java.lang.String | string, arg1: number[] | java.lang.Integer[]): number
      executeLargeUpdate?(arg0: java.lang.String | string, arg1: java.lang.String[] | string[]): number
      enquoteLiteral?(arg0: java.lang.String | string): java.lang.String
      enquoteIdentifier?(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): java.lang.String
      isSimpleIdentifier?(arg0: java.lang.String | string): boolean
      enquoteNCharLiteral?(arg0: java.lang.String | string): java.lang.String
    }
  }
}
