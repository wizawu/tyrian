declare namespace javax {
  namespace transaction {
    namespace xa {

      interface Xid {
        public static readonly MAXGTRIDSIZE: int
        public static readonly MAXBQUALSIZE: int
        getFormatId(): number
        getGlobalTransactionId(): number[]
        getBranchQualifier(): number[]
      }

    }
  }
}
