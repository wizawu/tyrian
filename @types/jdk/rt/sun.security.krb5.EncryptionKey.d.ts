declare namespace sun {
    namespace security {
        namespace krb5 {
class EncryptionKey implements java.lang.Cloneable {
    public static NULL_KEY: sun.security.krb5.EncryptionKey
    public getEType(): int
    public getKeyVersionNumber(): java.lang.Integer
    public getBytes(): byte[]
    public clone(): java.lang.Object
    public static acquireSecretKeys(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.EncryptionKey[]
    public static acquireSecretKey(arg0: sun.security.krb5.PrincipalName, arg1: char[], arg2: int, arg3: sun.security.krb5.internal.PAData$SaltAndParams): sun.security.krb5.EncryptionKey
    public static acquireSecretKey(arg0: char[], arg1: java.lang.String | string, arg2: int, arg3: byte[]): sun.security.krb5.EncryptionKey
    public static acquireSecretKeys(arg0: char[], arg1: java.lang.String | string): sun.security.krb5.EncryptionKey[]
    public constructor(arg0: byte[], arg1: int, arg2: java.lang.Integer)
    public constructor(arg0: int, arg1: byte[])
    public constructor(arg0: char[], arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: sun.security.krb5.EncryptionKey)
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public destroy(): void
    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.EncryptionKey
    public writeKey(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
    public toString(): string
    public static findKey(arg0: int, arg1: sun.security.krb5.EncryptionKey[]): sun.security.krb5.EncryptionKey
    public static findKey(arg0: int, arg1: java.lang.Integer, arg2: sun.security.krb5.EncryptionKey[]): sun.security.krb5.EncryptionKey
    public static class: java.lang.Class<any>
}

        }
    }
}