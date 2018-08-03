declare namespace javax {
    namespace sql {
        interface XAConnection extends javax.sql.PooledConnection {
            getXAResource(): javax.transaction.xa.XAResource
        }
        interface XAConnection$$Lambda extends javax.sql.PooledConnection {
            (): javax.transaction.xa.XAResource
        }
    }
}