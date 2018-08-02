declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class PAData {
    public constructor(arg0: int, arg1: byte[])
    public clone(): java.lang.Object
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public getType(): int
    public getValue(): byte[]
    public static getPreferredEType(arg0: sun.security.krb5.internal.PAData[], arg1: int): int
    public static getSaltAndParams(arg0: int, arg1: sun.security.krb5.internal.PAData[]): sun.security.krb5.internal.PAData$SaltAndParams
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}