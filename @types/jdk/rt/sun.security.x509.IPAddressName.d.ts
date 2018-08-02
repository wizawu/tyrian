declare namespace sun {
    namespace security {
        namespace x509 {
class IPAddressName implements sun.security.x509.GeneralNameInterface {
    public constructor(arg0: sun.security.util.DerValue)
    public constructor(arg0: byte[])
    public constructor(arg0: java.lang.String | string)
    public getType(): int
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public toString(): string
    public getName(): string
    public getBytes(): byte[]
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public constrains(arg0: sun.security.x509.GeneralNameInterface): int
    public subtreeDepth(): int
    public static class: java.lang.Class<any>
}

        }
    }
}