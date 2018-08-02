declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
interface SeqNumber {
    randInit(): void
    init(arg0: int): void
    current(): int
    next(): int
    step(): int
}

            }
        }
    }
}