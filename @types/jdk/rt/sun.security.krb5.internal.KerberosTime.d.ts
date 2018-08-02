declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class KerberosTime {
                    public constructor(arg0: long)
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.util.Date)
                    public static now(): sun.security.krb5.internal.KerberosTime
                    public toGeneralizedTimeString(): string
                    public asn1Encode(): byte[]
                    public getTime(): long
                    public toDate(): java.util.Date
                    public getMicroSeconds(): int
                    public withMicroSeconds(arg0: int): sun.security.krb5.internal.KerberosTime
                    public inClockSkew(): boolean
                    public greaterThanWRTClockSkew(arg0: sun.security.krb5.internal.KerberosTime, arg1: int): boolean
                    public greaterThanWRTClockSkew(arg0: sun.security.krb5.internal.KerberosTime): boolean
                    public greaterThan(arg0: sun.security.krb5.internal.KerberosTime): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public isZero(): boolean
                    public getSeconds(): int
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.KerberosTime
                    public static getDefaultSkew(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}