declare namespace java {
    namespace sql {
        interface Savepoint {
            getSavepointId(): int
            getSavepointName(): string
        }
    }
}