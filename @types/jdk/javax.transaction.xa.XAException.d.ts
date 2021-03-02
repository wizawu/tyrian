declare namespace javax {
  namespace transaction {
    namespace xa {

      class XAException extends java.lang.Exception {
        public errorCode: int
        public static readonly XA_RBBASE: int
        public static readonly XA_RBROLLBACK: int
        public static readonly XA_RBCOMMFAIL: int
        public static readonly XA_RBDEADLOCK: int
        public static readonly XA_RBINTEGRITY: int
        public static readonly XA_RBOTHER: int
        public static readonly XA_RBPROTO: int
        public static readonly XA_RBTIMEOUT: int
        public static readonly XA_RBTRANSIENT: int
        public static readonly XA_RBEND: int
        public static readonly XA_NOMIGRATE: int
        public static readonly XA_HEURHAZ: int
        public static readonly XA_HEURCOM: int
        public static readonly XA_HEURRB: int
        public static readonly XA_HEURMIX: int
        public static readonly XA_RETRY: int
        public static readonly XA_RDONLY: int
        public static readonly XAER_ASYNC: int
        public static readonly XAER_RMERR: int
        public static readonly XAER_NOTA: int
        public static readonly XAER_INVAL: int
        public static readonly XAER_PROTO: int
        public static readonly XAER_RMFAIL: int
        public static readonly XAER_DUPID: int
        public static readonly XAER_OUTSIDE: int
        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: int)
      }

    }
  }
}
