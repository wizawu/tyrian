declare namespace javax {
  namespace sql {

    interface XAConnectionBuilder {
      user(arg0: java.lang.String): javax.sql.XAConnectionBuilder
      password(arg0: java.lang.String): javax.sql.XAConnectionBuilder
      shardingKey(arg0: java.sql.ShardingKey): javax.sql.XAConnectionBuilder
      superShardingKey(arg0: java.sql.ShardingKey): javax.sql.XAConnectionBuilder
      build(): javax.sql.XAConnection
    }

  }
}
