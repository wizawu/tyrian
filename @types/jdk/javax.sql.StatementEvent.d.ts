declare namespace javax {
  namespace sql {

    class StatementEvent extends java.util.EventObject {

      static readonly serialVersionUID: long
      public constructor(arg0: javax.sql.PooledConnection, arg1: java.sql.PreparedStatement)
      public constructor(arg0: javax.sql.PooledConnection, arg1: java.sql.PreparedStatement, arg2: java.sql.SQLException)
      public getStatement(): java.sql.PreparedStatement
      public getSQLException(): java.sql.SQLException
    }

  }
}
