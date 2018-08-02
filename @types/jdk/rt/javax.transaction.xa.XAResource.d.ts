declare namespace javax {
    namespace transaction {
        namespace xa {
            interface XAResource {
                TMENDRSCAN: int
                TMFAIL: int
                TMJOIN: int
                TMNOFLAGS: int
                TMONEPHASE: int
                TMRESUME: int
                TMSTARTRSCAN: int
                TMSUCCESS: int
                TMSUSPEND: int
                XA_RDONLY: int
                XA_OK: int
                commit(arg0: javax.transaction.xa.Xid, arg1: boolean): void
                end(arg0: javax.transaction.xa.Xid, arg1: int): void
                forget(arg0: javax.transaction.xa.Xid): void
                getTransactionTimeout(): int
                isSameRM(arg0: javax.transaction.xa.XAResource): boolean
                prepare(arg0: javax.transaction.xa.Xid): int
                recover(arg0: int): javax.transaction.xa.Xid[]
                rollback(arg0: javax.transaction.xa.Xid): void
                setTransactionTimeout(arg0: int): boolean
                start(arg0: javax.transaction.xa.Xid, arg1: int): void
            }
        }
    }
}