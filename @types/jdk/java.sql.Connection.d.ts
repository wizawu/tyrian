declare namespace java {
  namespace sql {

    interface Connection extends java.sql.Wrapper, java.lang.AutoCloseable {
      public static readonly TRANSACTION_NONE: int
      public static readonly TRANSACTION_READ_UNCOMMITTED: int
      public static readonly TRANSACTION_READ_COMMITTED: int
      public static readonly TRANSACTION_REPEATABLE_READ: int
      public static readonly TRANSACTION_SERIALIZABLE: int
      createStatement(): java.sql.Statement
      prepareStatement(arg0: java.lang.String | string): java.sql.PreparedStatement
      prepareCall(arg0: java.lang.String | string): java.sql.CallableStatement
      nativeSQL(arg0: java.lang.String | string): java.lang.String
      setAutoCommit(arg0: boolean | java.lang.Boolean): void
      getAutoCommit(): boolean
      commit(): void
      rollback(): void
      close(): void
      isClosed(): boolean
      getMetaData(): java.sql.DatabaseMetaData
      setReadOnly(arg0: boolean | java.lang.Boolean): void
      isReadOnly(): boolean
      setCatalog(arg0: java.lang.String | string): void
      getCatalog(): java.lang.String
      setTransactionIsolation(arg0: number | java.lang.Integer): void
      getTransactionIsolation(): number
      getWarnings(): java.sql.SQLWarning
      clearWarnings(): void
      createStatement(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.sql.Statement
      prepareStatement(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.sql.PreparedStatement
      prepareCall(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.sql.CallableStatement
      getTypeMap(): java.util.Map<java.lang.String,java.lang.Class<unknown>>
      setTypeMap(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): void
      setHoldability(arg0: number | java.lang.Integer): void
      getHoldability(): number
      setSavepoint(): java.sql.Savepoint
      setSavepoint(arg0: java.lang.String | string): java.sql.Savepoint
      rollback(arg0: java.sql.Savepoint): void
      releaseSavepoint(arg0: java.sql.Savepoint): void
      createStatement(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.sql.Statement
      prepareStatement(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.sql.PreparedStatement
      prepareCall(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.sql.CallableStatement
      prepareStatement(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.sql.PreparedStatement
      prepareStatement(arg0: java.lang.String | string, arg1: int[]): java.sql.PreparedStatement
      prepareStatement(arg0: java.lang.String | string, arg1: java.lang.String[]): java.sql.PreparedStatement
      createClob(): java.sql.Clob
      createBlob(): java.sql.Blob
      createNClob(): java.sql.NClob
      createSQLXML(): java.sql.SQLXML
      isValid(arg0: number | java.lang.Integer): boolean
      setClientInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      setClientInfo(arg0: java.util.Properties): void
      getClientInfo(arg0: java.lang.String | string): java.lang.String
      getClientInfo(): java.util.Properties
      createArrayOf(arg0: java.lang.String | string, arg1: java.lang.Object[]): java.sql.Array
      createStruct(arg0: java.lang.String | string, arg1: java.lang.Object[]): java.sql.Struct
      setSchema(arg0: java.lang.String | string): void
      getSchema(): java.lang.String
      abort(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): void
      setNetworkTimeout(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: number | java.lang.Integer): void
      getNetworkTimeout(): number
      beginRequest(): void
      endRequest(): void
      setShardingKeyIfValid(arg0: java.sql.ShardingKey, arg1: java.sql.ShardingKey, arg2: number | java.lang.Integer): boolean
      setShardingKeyIfValid(arg0: java.sql.ShardingKey, arg1: number | java.lang.Integer): boolean
      setShardingKey(arg0: java.sql.ShardingKey, arg1: java.sql.ShardingKey): void
      setShardingKey(arg0: java.sql.ShardingKey): void
    }

  }
}
