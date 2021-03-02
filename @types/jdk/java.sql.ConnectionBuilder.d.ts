declare namespace java {
  namespace sql {

    interface ConnectionBuilder {
      user(arg0: java.lang.String | string): java.sql.ConnectionBuilder
      password(arg0: java.lang.String | string): java.sql.ConnectionBuilder
      shardingKey(arg0: java.sql.ShardingKey): java.sql.ConnectionBuilder
      superShardingKey(arg0: java.sql.ShardingKey): java.sql.ConnectionBuilder
      build(): java.sql.Connection
    }

  }
}
