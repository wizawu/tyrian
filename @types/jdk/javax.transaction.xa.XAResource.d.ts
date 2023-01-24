declare namespace javax {
  namespace transaction {
    namespace xa {
      interface XAResource {
        readonly TMENDRSCAN: int
        readonly TMFAIL: int
        readonly TMJOIN: int
        readonly TMNOFLAGS: int
        readonly TMONEPHASE: int
        readonly TMRESUME: int
        readonly TMSTARTRSCAN: int
        readonly TMSUCCESS: int
        readonly TMSUSPEND: int
        readonly XA_RDONLY: int
        readonly XA_OK: int
        commit(arg0: javax.transaction.xa.Xid, arg1: boolean | java.lang.Boolean): void
        end(arg0: javax.transaction.xa.Xid, arg1: number | java.lang.Integer): void
        forget(arg0: javax.transaction.xa.Xid): void
        getTransactionTimeout(): number
        isSameRM(arg0: javax.transaction.xa.XAResource): boolean
        prepare(arg0: javax.transaction.xa.Xid): number
        recover(arg0: number | java.lang.Integer): javax.transaction.xa.Xid[]
        rollback(arg0: javax.transaction.xa.Xid): void
        setTransactionTimeout(arg0: number | java.lang.Integer): boolean
        start(arg0: javax.transaction.xa.Xid, arg1: number | java.lang.Integer): void
      }
    }
  }
}
