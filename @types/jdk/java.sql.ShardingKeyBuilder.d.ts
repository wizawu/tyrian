declare namespace java {
  namespace sql {
    interface ShardingKeyBuilder {
      subkey(arg0: java.lang.Object | any, arg1: java.sql.SQLType): java.sql.ShardingKeyBuilder
      build(): java.sql.ShardingKey
    }
  }
}
