declare namespace java {
    namespace security {
        namespace cert {
interface Extension {
    getId(): string
    isCritical(): boolean
    getValue(): byte[]
    encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
}

        }
    }
}