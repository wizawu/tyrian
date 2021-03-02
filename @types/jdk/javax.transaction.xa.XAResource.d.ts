declare namespace javax {
  namespace transaction {
    namespace xa {

      interface XAResource {
        public static readonly TMENDRSCAN: int
        public static readonly TMFAIL: int
        public static readonly TMJOIN: int
        public static readonly TMNOFLAGS: int
        public static readonly TMONEPHASE: int
        public static readonly TMRESUME: int
        public static readonly TMSTARTRSCAN: int
        public static readonly TMSUCCESS: int
        public static readonly TMSUSPEND: int
        public static readonly XA_RDONLY: int
        public static readonly XA_OK: int
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
