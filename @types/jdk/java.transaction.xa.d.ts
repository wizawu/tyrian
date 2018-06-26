declare namespace javax {
    namespace transaction {
        namespace xa {
            class XAException extends java.lang.Exception {
                public errorCode: int
                public static XA_RBBASE: int
                public static XA_RBROLLBACK: int
                public static XA_RBCOMMFAIL: int
                public static XA_RBDEADLOCK: int
                public static XA_RBINTEGRITY: int
                public static XA_RBOTHER: int
                public static XA_RBPROTO: int
                public static XA_RBTIMEOUT: int
                public static XA_RBTRANSIENT: int
                public static XA_RBEND: int
                public static XA_NOMIGRATE: int
                public static XA_HEURHAZ: int
                public static XA_HEURCOM: int
                public static XA_HEURRB: int
                public static XA_HEURMIX: int
                public static XA_RETRY: int
                public static XA_RDONLY: int
                public static XAER_ASYNC: int
                public static XAER_RMERR: int
                public static XAER_NOTA: int
                public static XAER_INVAL: int
                public static XAER_PROTO: int
                public static XAER_RMFAIL: int
                public static XAER_DUPID: int
                public static XAER_OUTSIDE: int
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: int)
                public static class: java.lang.Class<any>
            }
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
            interface Xid {
                MAXGTRIDSIZE: int
                MAXBQUALSIZE: int
                getFormatId(): int
                getGlobalTransactionId(): byte[]
                getBranchQualifier(): byte[]
            }
        }
    }
}
