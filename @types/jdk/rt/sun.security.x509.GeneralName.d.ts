declare namespace sun {
    namespace security {
        namespace x509 {
class GeneralName {
    public constructor(arg0: sun.security.x509.GeneralNameInterface)
    public constructor(arg0: sun.security.util.DerValue)
    public constructor(arg0: sun.security.util.DerValue, arg1: boolean)
    public getType(): int
    public getName(): sun.security.x509.GeneralNameInterface
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public static class: java.lang.Class<any>
}

        }
    }
}