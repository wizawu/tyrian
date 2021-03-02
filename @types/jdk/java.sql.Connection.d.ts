declare namespace java {
  namespace sql {

    interface Connection extends java.sql.Wrapper, java.lang.AutoCloseable {
      public static readonly TRANSACTION_NONE: int
      public static readonly TRANSACTION_READ_UNCOMMITTED: int
      public static readonly TRANSACTION_READ_COMMITTED: int
      public static readonly TRANSACTION_REPEATABLE_READ: int
      public static readonly TRANSACTION_SERIALIZABLE: int
      createStatement(): java.sql.Statement
      prepareStatement(arg0: java.lang.String): java.sql.PreparedStatement
      prepareCall(arg0: java.lang.String): java.sql.CallableStatement
      nativeSQL(arg0: java.lang.String): java.lang.String
      setAutoCommit(arg0: boolean): void
      getAutoCommit(): boolean
      commit(): void
      rollback(): void
      close(): void
      isClosed(): boolean
      getMetaData(): java.sql.DatabaseMetaData
      setReadOnly(arg0: boolean): void
      isReadOnly(): boolean
      setCatalog(arg0: java.lang.String): void
      getCatalog(): java.lang.String
      setTransactionIsolation(arg0: int): void
      getTransactionIsolation(): int
      getWarnings(): java.sql.SQLWarning
      clearWarnings(): void
      createStatement(arg0: int, arg1: int): java.sql.Statement
      prepareStatement(arg0: java.lang.String, arg1: int, arg2: int): java.sql.PreparedStatement
      prepareCall(arg0: java.lang.String, arg1: int, arg2: int): java.sql.CallableStatement
      getTypeMap(): java.util.Map<java.lang.String,java.lang.Class<unknown>>
      setTypeMap(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): void
      setHoldability(arg0: int): void
      getHoldability(): int
      setSavepoint(): java.sql.Savepoint
      setSavepoint(arg0: java.lang.String): java.sql.Savepoint
      rollback(arg0: java.sql.Savepoint): void
      releaseSavepoint(arg0: java.sql.Savepoint): void
      createStatement(arg0: int, arg1: int, arg2: int): java.sql.Statement
      prepareStatement(arg0: java.lang.String, arg1: int, arg2: int, arg3: int): java.sql.PreparedStatement
      prepareCall(arg0: java.lang.String, arg1: int, arg2: int, arg3: int): java.sql.CallableStatement
      prepareStatement(arg0: java.lang.String, arg1: int): java.sql.PreparedStatement
      prepareStatement(arg0: java.lang.String, arg1: int[]): java.sql.PreparedStatement
      prepareStatement(arg0: java.lang.String, arg1: java.lang.String[]): java.sql.PreparedStatement
      createClob(): java.sql.Clob
      createBlob(): java.sql.Blob
      createNClob(): java.sql.NClob
      createSQLXML(): java.sql.SQLXML
      isValid(arg0: int): boolean
      setClientInfo(arg0: java.lang.String, arg1: java.lang.String): void
      setClientInfo(arg0: java.util.Properties): void
      getClientInfo(arg0: java.lang.String): java.lang.String
      getClientInfo(): java.util.Properties
      createArrayOf(arg0: java.lang.String, arg1: java.lang.Object[]): java.sql.Array
      createStruct(arg0: java.lang.String, arg1: java.lang.Object[]): java.sql.Struct
      setSchema(arg0: java.lang.String): void
      getSchema(): java.lang.String
      abort(arg0: java.util.concurrent.Executor): void
      setNetworkTimeout(arg0: java.util.concurrent.Executor, arg1: int): void
      getNetworkTimeout(): int
      beginRequest(): void
      endRequest(): void
      setShardingKeyIfValid(arg0: java.sql.ShardingKey, arg1: java.sql.ShardingKey, arg2: int): boolean
      setShardingKeyIfValid(arg0: java.sql.ShardingKey, arg1: int): boolean
      setShardingKey(arg0: java.sql.ShardingKey, arg1: java.sql.ShardingKey): void
      setShardingKey(arg0: java.sql.ShardingKey): void
    }

  }
}
