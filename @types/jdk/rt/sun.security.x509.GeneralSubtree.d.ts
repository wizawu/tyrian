declare namespace sun {
    namespace security {
        namespace x509 {
class GeneralSubtree {
    public constructor(arg0: sun.security.x509.GeneralName, arg1: int, arg2: int)
    public constructor(arg0: sun.security.util.DerValue)
    public getName(): sun.security.x509.GeneralName
    public getMinimum(): int
    public getMaximum(): int
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public static class: java.lang.Class<any>
}

        }
    }
}