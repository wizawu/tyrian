declare namespace javax {
  namespace sql {
    class ConnectionEvent extends java.util.EventObject {
      static readonly serialVersionUID: long
      public constructor(arg0: javax.sql.PooledConnection)
      public constructor(arg0: javax.sql.PooledConnection, arg1: java.sql.SQLException)
      public getSQLException(): java.sql.SQLException
    }
  }
}
