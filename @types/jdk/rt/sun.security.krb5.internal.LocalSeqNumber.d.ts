declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class LocalSeqNumber implements sun.security.krb5.internal.SeqNumber {
                    public constructor()
                    public constructor(arg0: int)
                    public constructor(arg0: java.lang.Integer)
                    public randInit(): void
                    public init(arg0: int): void
                    public current(): int
                    public next(): int
                    public step(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}