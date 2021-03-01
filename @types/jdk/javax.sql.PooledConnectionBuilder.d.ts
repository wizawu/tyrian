declare namespace javax {
  namespace sql {

    interface PooledConnectionBuilder {

      user(arg0: java.lang.String): javax.sql.PooledConnectionBuilder
      password(arg0: java.lang.String): javax.sql.PooledConnectionBuilder
      shardingKey(arg0: java.sql.ShardingKey): javax.sql.PooledConnectionBuilder
      superShardingKey(arg0: java.sql.ShardingKey): javax.sql.PooledConnectionBuilder
      build(): javax.sql.PooledConnection
    }

  }
}
