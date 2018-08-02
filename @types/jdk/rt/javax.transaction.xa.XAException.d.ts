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
        }
    }
}