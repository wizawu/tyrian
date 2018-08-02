declare namespace sun {
    namespace security {
        namespace x509 {
class X400Address implements sun.security.x509.GeneralNameInterface {
    public constructor(arg0: byte[])
    public constructor(arg0: sun.security.util.DerValue)
    public getType(): int
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public toString(): string
    public constrains(arg0: sun.security.x509.GeneralNameInterface): int
    public subtreeDepth(): int
    public static class: java.lang.Class<any>
}

        }
    }
}