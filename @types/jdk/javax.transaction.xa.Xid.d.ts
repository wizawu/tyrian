declare namespace javax {
  namespace transaction {
    namespace xa {
      interface Xid {
        readonly MAXGTRIDSIZE: int
        readonly MAXBQUALSIZE: int
        getFormatId(): number
        getGlobalTransactionId(): number[]
        getBranchQualifier(): number[]
      }
    }
  }
}
