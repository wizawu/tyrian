declare namespace sun {
    namespace security {
        namespace x509 {
class EDIPartyName implements sun.security.x509.GeneralNameInterface {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: sun.security.util.DerValue)
    public getType(): int
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public getAssignerName(): string
    public getPartyName(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public constrains(arg0: sun.security.x509.GeneralNameInterface): int
    public subtreeDepth(): int
    public static class: java.lang.Class<any>
}

        }
    }
}