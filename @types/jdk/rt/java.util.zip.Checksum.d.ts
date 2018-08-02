declare namespace java {
    namespace util {
        namespace zip {
interface Checksum {
    update(arg0: int): void
    update(arg0: byte[], arg1: int, arg2: int): void
    getValue(): long
    reset(): void
}

        }
    }
}