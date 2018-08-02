declare namespace javax {
    namespace transaction {
        namespace xa {
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