declare namespace javax {
  namespace sql {

    interface XAConnection extends javax.sql.PooledConnection {
      getXAResource(): javax.transaction.xa.XAResource
    }

  }
}
